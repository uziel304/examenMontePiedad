import { Router } from "express";
import {login,register,logout,profile} from "../controllers/auth.controller.js"
import { authRequired }  from "../middlewares/validateToken.js";
import { validatorSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schema/auth.schema.js";
const router = Router()

router.post('/register', validatorSchema(registerSchema),register)
router.post('/login', validatorSchema(loginSchema),login)
router.post('/logout',logout)
router.get('/profile',authRequired,profile)

export default router