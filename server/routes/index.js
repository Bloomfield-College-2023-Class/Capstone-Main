import express from "express";
import { getCars, getCarsbyID } from "../controllers/car.js";
import { getUsers, Register, Login, Logout, updateUser } from "../controllers/Users.js";
import { getByCar } from "../controllers/ParkedCars.js";

const router = express.Router();

router.patch('/updateUser', updateUser)
router.get('/users', getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.delete('/logout', Logout);

router.get('/getCars', getCars);
router.post('/getCarsID', getCarsbyID);

router.post('/parked', getByCar);

export default router;
