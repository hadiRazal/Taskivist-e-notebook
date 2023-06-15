import express from "express";
import { loginController, registerController } from "../controllers/authController.js";
import { requireSignIn } from "../middleware/authMiddleware.js"

const router = express.Router()

// Register
router.post('/register', registerController)
// Login
router.post('/login', loginController)
// User Check
// Protected User Route Auth
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true })
})

export default router;