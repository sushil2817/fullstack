import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const registerUser = async (req, res) => {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password || !phone) {
        console.log("Data is Missing");
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        });
    }
    try {
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User Already Avaliable",
            });
        }
        // hashpassword
        const hashedPassword = await bcrypt.hash(password, 10);
        const verficationToken = crypto.randomBytes(32).toString("hex");
        const user = await prisma.user.create({
            data: {
                name,
                email,
                phone,
                hashedPassword,
                verficationToken,
            },
        });

        // send mail - TODO
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Registration failed",
            error,
        });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        });
    }
    try {
        const user = await prisma.user.findUnique({
            where: email,
        });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or passoword",
            });
        }

        const isMAtched = bcrypt.compare(password, user.passoword);
        if (!isMAtched) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or passoword",
            });
        }
        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        );
        const cookieOpitons = {
            httpOnly: true,
        };
        res.cookie("token", token, cookieOpitons);
        return res.status(201).json({
            success: false,
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
            message: "Login success",
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error,
            message: "Login Failed",
        });
    }
};

export { registerUser, loginUser };
