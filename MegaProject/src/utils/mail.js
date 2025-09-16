import Mailgen from "mailgen"
import nodemailer from "nodemailer"


const sendMail = async (options) => {
    const mailGenerator = new Mailgen({
        theme: 'default',
        product: {
            name: 'Task Manager',
            link: 'https://mailgen.js/'

        },
    });


    const emailText = mailGenerator.generatePlaintext(options.mailGenContent);

    const emailBody = mailGenerator.generate(options.mailGenContent);


    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        port: process.env.MAILTRAP_SMTP_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASSWORD,
        },
    });

    const mail = {
        from: 'susil.kmt27@gmail.com',
        to: options.email,
        subject: options.subject,
        text: emailText, // plain‑text body
        html: emailBody, // HTML body
    };

    try {
        await transporter.sendMail(mail)
    } catch (error) {
        console.error("Email Failed: ",error);
        
    }

}

const emailVerificationMailGenContent = (username, verificationUrl) => {
    return {
        body: {
            name: "UserName",
            intro: "Welcome to App! We\'re very excited to have you on board.",
            action: {
                instructions: "To get started with our app, please click here:",
                button: {
                    color: "#22BC66", // Optional action button color
                    text: "Verify your email",
                    link: verificationUrl,
                }
            },
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    }
}

const forgotPasswordMailGenContent = (username, passwordResetUrl) => {
    return {
        body: {
            name: "UserName",
            intro: "We got a request to reset your password",
            action: {
                instructions: "To change your password click the button",
                button: {
                    color: "#bc2222ff", // Optional action button color
                    text: "reset password",
                    link: passwordResetUrl,
                }
            },
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    }
}

