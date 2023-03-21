import express from "express";
import { getCars, getCarsbyID, Import, updateCar } from "../controllers/car.js";
import { getUsers, Register, Login, Logout, updateUser } from "../controllers/Users.js";
import { getByCar } from "../controllers/ParkedCars.js";
import { createNotifications } from "../controllers/Notifications.js";
import { getNotifications } from "../controllers/Notifications.js";
import { deleteNotification } from "../controllers/Notifications.js";

const router = express.Router();

//users stuff
router.patch('/updateUser', updateUser)
router.get('/users', getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/logout', Logout);

//car stuff
router.get('/getCars', getCars);
router.post('/getCarsID', getCarsbyID);
router.post('/import', Import);
router.patch('/updateCar', updateCar);

//parked cars stuff
router.post('/parked', getByCar);

//notifications stuff
router.post('/createNotifications', createNotifications);
router.get('/notifications/:userID', getNotifications);
router.delete('/deleteNotification/:id', deleteNotification);

export default router;
