import express from "express";
import { deleteCar, getCars, getCarsbyID, Import, updateCar } from "../controllers/car.js";
import { getUsers, Register, Login, Logout, updateUser, deleteUser } from "../controllers/Users.js";
import { deleteParkedCar, getAllParked, getByCar } from "../controllers/ParkedCars.js";
import { createNotifications, getAllNotifications, patchNotifications } from "../controllers/Notifications.js";
import { getNotifications } from "../controllers/Notifications.js";
import { deleteNotification } from "../controllers/Notifications.js";
import { getCarByLicensePlate } from "../controllers/car.js";
import { addTag, deleteTag, getTagbyID, getTags, updateTag } from "../controllers/Tags.js";
import { getParking, updateParking } from "../controllers/ParkingLot.js";
import { getUserByFirstName } from "../controllers/Users.js";
import { deleteCard, getCards, updateCard } from "../controllers/Cards.js";

const router = express.Router();

//users stuff
router.patch('/updateUser', updateUser)
router.get('/users', getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/logout', Logout);
router.delete('/deleteUser', deleteUser)
router.get('/getUserByFirstName', getUserByFirstName);

//car stuff
router.get('/getCarByLicensePlate', getCarByLicensePlate);
router.get('/getCars', getCars);
router.post('/getCarsID', getCarsbyID);
router.post('/import', Import);
router.patch('/updateCar', updateCar);
router.delete('/deleteCar', deleteCar)

//parked cars stuff
router.post('/parked', getByCar);
router.get('/getAllParked', getAllParked);
router.delete('/deletePark', deleteParkedCar);

//notifications stuff
router.post('/createNotifications', createNotifications);
router.get('/notifications/:userID', getNotifications);
router.get('/getAllNotifications', getAllNotifications);
router.delete('/deleteNotification', deleteNotification);
router.patch('/patchNotification', patchNotifications);

//Tag stuff
router.get('/getTags', getTags);
router.post('/getTagbyID', getTagbyID);
router.post('/addTag', addTag);
router.patch('/updateTag', updateTag);
router.delete('/deleteTag', deleteTag);

//Parking Lots
router.get('/getLots', getParking);
router.patch('/updateLot', updateParking);

//Cards
router.get('getCards', getCards);
router.patch('updateCard', updateCard);
router.delete('deleteCard', deleteCard);

export default router;
