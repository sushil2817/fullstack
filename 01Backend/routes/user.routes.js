import express from 'express'
import { registerUser,verifyUser,loginUser,resetPassword } from '../controller/user.controller.js'

const router = express.Router()

router.post("/register",registerUser);
router.get("/verify/:token",verifyUser);
router.post('/login',loginUser);
// router.

export default router