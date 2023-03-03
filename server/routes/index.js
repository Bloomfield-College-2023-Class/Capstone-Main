import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";

const router = express.Router();

router.get('/users', getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.delete('/logout', Logout);

export default router;
