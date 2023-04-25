import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Box, Typography, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, FormControl } from "@mui/material";
import { BASE_URL } from "components/url";

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [carList, setCarList] = useState([]);
    const [lotList, setLotList] = useState([]);
    const [notifications, setNotifications] = useState([])
    const [parkedCarsList, setParkedCarsList] = useState([])
    const [tags, setTags] = useState([])
    const [cards, setCards] = useState([])

    const [selectedUser, setSelectedUser] = useState();
    const [selectedCar, setSelectedCar] = useState();
    const [selectedLot, setSelectedLot] = useState();
    const [selectedNotification, setSelectedNotification] = useState();
    const [selectedParkedCar, setSelectedParkedCar] = useState();
    const [selectedTag, setSelectedTag] = useState();
    const [selectedCard, setSelectedCard] = useState();

    const [isUsersOpen, setIsUsersOpen] = useState(false);
    const [isCarsOpen, setIsCarsOpen] = useState(false);
    const [isLotsOpen, setIsLotsOpen] = useState(false);
    const [isNotesOpen, setNotesOpen] = useState(false);
    const [isParkedOpen, setIsParkedOpen] = useState(false);
    const [isTagOpen, setTagOpen] = useState(false);
    const [isCardOpen, setCardOpen] = useState(false);

    const fillUsers = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/users`);
            setUsers(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const fillCars = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/getCars`);
            setCarList(response.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    const fillLots = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/getLots`);
            setLotList(response.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    const fillNots = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/getAllNotifications`)
            setNotifications(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    const fillParked = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/getAllParked`)
            setParkedCarsList(response.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    const fillTags = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/getTags`)
            setTags(response.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    const fillCards = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/getCards`)
            setCards(response.data);
        } catch (error) {
            console.log(error.message)
        }
    }

    const updateUser = async () => {
        try {
            const response = await axios.patch(`${BASE_URL}/updateUser`, {
                username: selectedUser.userName,
                userID: selectedUser.userID,
                phoneNumber: selectedUser.phoneNumber,
                email: selectedUser.email,
                firstName: selectedUser.firstName,
                lastName: selectedUser.lastName,
                userType: selectedUser.userType
            })
            alert("update successful")
            fillUsers();
        } catch (error) {
            alert(error.message)
        }
    }

    const updateCar = async () => {
        try {
            const response = await axios.patch(`${BASE_URL}/updateCar`, {
                carID: selectedCar.carID,
                userID: selectedCar.userID,
                color: selectedCar.color,
                make: selectedCar.make,
                model: selectedCar.model,
                licensePlate: selectedCar.licensePlate
            })
            alert("update successful")
            fillCars();
        } catch (error) {
            alert(error.message)
        }
    }

    const updateLots = async () => {
        try {
            const response = await axios.patch(`${BASE_URL}/updateLot`, {
                parkingLotID: selectedLot.parkingLotID,
                numberOfSpots: selectedLot.numberOfSpots
            })
            alert("update successful")
            fillLots();
        } catch (error) {
            alert(error.message)
        }
    }

    const updateParked = async () => {
        try {
            const response = await axios.patch(`${BASE_URL}/updateCar`, {
                recordID: selectedParkedCar.recordID,
                parkinglotID: selectedParkedCar.parkinglotID,
                carID: selectedParkedCar.carID,
                timeEntered: selectedParkedCar.timeEntered,
                timeExited: selectedParkedCar.timeExited
            })
            alert("update successful")
            fillParked();
        } catch (error) {
            alert(error.message)
        }
    }

    const updateNots = async () => {
        try {
            const response = await axios.patch(`${BASE_URL}/patchNotification`, {
                notificationID: selectedNotification.notificationID,
                title: selectedNotification.title,
                content: selectedNotification.content,
                userID: selectedNotification.userID
            })
            alert("update successful")
            fillNots()
        } catch (error) {
            alert(error.message)
        }
    }

    const updateTags = async () => {
        try {
            const response = await axios.patch(`${BASE_URL}/updateTag`, {
                tagID: selectedTag.tagID,
                userID: selectedTag.userID,
                expirationDate: selectedTag.expirationDate,
                effectiveDate: selectedTag.effectiveDate
            })
            alert("update successful")
            fillTags()
        } catch (error) {
            alert(error.message)
        }
    }

    const updateCard = async () => {
        try {
            const response = await axios.patch(`${BASE_URL}/updateCard`, {
                rfid: selectedCard.rfid,
                userID: selectedTag.userID
            })
            alert("update successful")
            fillCards()
        } catch (error) {
            alert(error.message)
        }
    }

    const deleteUser = async () => {
        try{
            const user = selectedUser.userID
            console.log(user)
            const response = await axios.delete(`${BASE_URL}/deleteUser`, {data: {
                userID: user
            }})
            alert("delete successful")
            fillUsers()
        } catch (error) {
            alert(error.message)
        }
    }

    const deleteCar = async () => {
        try{
            const response = await axios.delete(`${BASE_URL}/deleteCar`, {data: {
                carID: selectedCar.carID
            }})
            alert("delete successful")
            fillCars()
        } catch (error) {
            alert(error.message)
        }
    }

    const deleteNots = async () => {
        try{
            const response = await axios.delete(`${BASE_URL}/deleteNotification`, {data: {id: selectedNotification.notificationID}})
            alert("delete successful")
            fillNots()
        } catch (error) {
            alert(error.message)
        }
    }

    const deleteParkedCars = async () => {
        try{
            const response = await axios.delete(`${BASE_URL}/deletePark`, {data: {
                recordID: selectedParkedCar.recordID
            }})
            alert("delete successful")
            fillParked()
        } catch (error) {
            alert(error.message)
        }
    }

    const deleteTags = async () => {
        try{
            const response = await axios.delete(`${BASE_URL}/deleteTag`, {data: {
                tagID: selectedTag.tagID
            }})
            alert("delete successful")
            fillTags()
        } catch (error) {
            alert(error.message)
        }
    }

    const deleteCard = async () => {
        try {
            const response = await axios.delete(`${BASE_URL}/deleteCard`, {data: {
                rfid: selectedCard.rfid
            }})
            alert("delete successful")
            fillCards();
        } catch (error) {
            alert(error.message)
        }
    }

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const handleCarClick = (car) => {
        setSelectedCar(car);
    }

    const handleNoteClick = (note) => {
        setSelectedNotification(note);
    }

    const handleParkedClick = (parked) => {
        setSelectedParkedCar(parked);
    }

    const handleLotClick = (lot) => {
        setSelectedLot(lot);
    }

    const handleTagClick = (tag) => {
        setSelectedTag(tag);
    }

    const handleCardClick = (card) => {
        setSelectedCard(card);
    }

    useEffect(() => {
        fillUsers();
        fillCars();
        fillLots();
        fillNots();
        fillParked();
        fillTags();
        fillCards();
    }, []);

    return (
        <Container maxWidth="md">
            <Box my={4}>
                <Typography variant="h4" mb={2}>
                    Admin
                </Typography>
                <Button variant="contained" color="primary" onClick={() => setIsUsersOpen(!isUsersOpen)}>
                    Users
                </Button>
                {isUsersOpen ? (
                    <Container maxWidth="md">
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>User ID</TableCell>
                                        <TableCell>First Name</TableCell>
                                        <TableCell>Last Name</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Phone Number</TableCell>
                                        <TableCell>Username</TableCell>
                                        <TableCell>User Type</TableCell>
                                        <TableCell>Select</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users ? (
                                        users.map((user) => (
                                            <TableRow key={user.userID}>
                                                <TableCell>{user.userID}</TableCell>
                                                <TableCell>{user.firstName}</TableCell>
                                                <TableCell>{user.lastName}</TableCell>
                                                <TableCell>{user.email}</TableCell>
                                                <TableCell>{user.phoneNumber}</TableCell>
                                                <TableCell>{user.username}</TableCell>
                                                <TableCell>{user.userType}</TableCell>
                                                <TableCell>
                                                    <Button variant="contained" color="primary" onClick={() => handleUserClick(user)}>
                                                        Select
                                                    </Button>
                                                </TableCell>
                                                <TableCell>
                                                    <Button variant="contained" color="primary" onClick={() => handleUserClick(user)}>
                                                        Select
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell>no Information</TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        {selectedUser ?
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>User ID</TableCell>
                                        <TableCell>First Name</TableCell>
                                        <TableCell>Last Name</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Phone Number</TableCell>
                                        <TableCell>Username</TableCell>
                                        <TableCell>User Type</TableCell>
                                        <TableCell>Update</TableCell>
                                        <TableCell>Delete</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                        <TextField
                                        variant="outlined"
                                        className="input"
                                        value={selectedUser.userID}
                                        onChange={(e) => setSelectedUser({...selectedUser, userID: e.target.value})}
                                        />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                label="First Name"
                                                variant="outlined"
                                                className="input"
                                                value={selectedUser.firstName}
                                                onChange={(e) => setSelectedUser({...selectedUser, firstName: e.target.value})}
                                            />
                                        </TableCell>

                                        <TableCell>
                                            <TextField
                                                label="Last Name"
                                                variant="outlined"
                                                className="input"
                                                value={selectedUser.lastName}
                                                onChange={(e) => setSelectedUser({...selectedUser, lastName: e.target.value})}
                                            />
                                        </TableCell>

                                        <TableCell>
                                            <TextField
                                                label="Email"
                                                variant="outlined"
                                                className="input"
                                                value={selectedUser.email}
                                                onChange={(e) => setSelectedUser({...selectedUser, email: e.target.value})}
                                            />
                                        </TableCell>

                                        <TableCell>
                                            <TextField
                                                label="Phone Number"
                                                variant="outlined"
                                                className="input"
                                                value={selectedUser.phoneNumber}
                                                onChange={(e) => setSelectedUser({...selectedUser, phoneNumber: e.target.value})}
                                            />
                                        </TableCell>

                                        <TableCell>
                                            <TextField
                                                label="Username"
                                                variant="outlined"
                                                className="input"
                                                value={selectedUser.username}
                                                onChange={(e) => setSelectedUser({...selectedUser, username: e.target.value})}
                                            />
                                        </TableCell>

                                        <TableCell>
                                            <TextField
                                                label="User Type"
                                                variant="outlined"
                                                className="input"
                                                value={selectedUser.userType}
                                                onChange={(e) => setSelectedUser({...selectedUser, userType: e.target.value})}
                                            />
                                        </TableCell>

                                        <TableCell>
                                            <Button variant="contained" color="primary" onClick={() => updateUser()}>
                                                Update
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="primary" onClick={() => deleteUser()}>
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            </TableContainer>
                            : <div />}
                    </Container>
                ) : <div />}
            </Box>
            <Button variant="contained" color="primary" onClick={() => setIsCarsOpen(!isCarsOpen)}>Cars</Button>

            {isCarsOpen ? (

            <Box my="4">
                <TableContainer component={Paper}>
                <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Car ID</TableCell>
                    <TableCell>Owner ID</TableCell>
                    <TableCell>Color</TableCell>
                    <TableCell>Make</TableCell>
                    <TableCell>Model</TableCell>
                    <TableCell>License</TableCell>
                    <TableCell>Select</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {carList ? (
                    carList.map((car) => (
                        <TableRow key={car.carID}>
                        <TableCell>{car.userID}</TableCell>
                        <TableCell>{car.color}</TableCell>
                        <TableCell>{car.make}</TableCell>
                        <TableCell>{car.model}</TableCell>
                        <TableCell>{car.licensePlate}</TableCell>
                        <TableCell>
                            <Button onClick={() => handleCarClick(car)} variant="contained" color="primary">
                            Select
                            </Button>
                        </TableCell>
                        </TableRow>
                    ))
                    ) : (
                        <TableRow>
                        <TableCell>no Information</TableCell>
                    </TableRow>
                    )}
                </TableBody>
                </Table>
                </TableContainer>
                {selectedCar ?
                <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>Car ID</TableCell>
                        <TableCell>Owner ID</TableCell>
                        <TableCell>Color</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Model</TableCell>
                        <TableCell>License</TableCell>
                        <TableCell>Update</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                        <TableCell>
                        <TextField type="text" className="input" value={selectedCar.carID} onChange={(e) => setSelectedCar({ ...selectedCar, carID: e.target.value })} />
                        </TableCell>
                        <TableCell>
                        <TextField type="text" className="input" value={selectedCar.userID} onChange={(e) => setSelectedCar({ ...selectedCar, userID: e.target.value })} />
                        </TableCell>
                        <TableCell>
                        <TextField type="text" className="input" value={selectedCar.color} onChange={(e) => setSelectedCar({ ...selectedCar, color: e.target.value })} />
                        </TableCell>
                        <TableCell>
                        <TextField type="text" className="input" value={selectedCar.make} onChange={(e) => setSelectedCar({ ...selectedCar, make: e.target.value })} />
                        </TableCell>
                        <TableCell>
                        <TextField type="text" className="input" value={selectedCar.model} onChange={(e) => setSelectedCar({ ...selectedCar, model: e.target.value })} />
                        </TableCell>
                        <TableCell>
                        <TextField type="text" className="input" value={selectedCar.licensePlate} onChange={(e) => setSelectedCar({ ...selectedCar, licensePlate: e.target.value })} />
                        </TableCell>
                        <TableCell>
                        <Button onClick={() => updateCar()} variant="contained" color="primary">
                            Update
                        </Button>
                        </TableCell>
                        <TableCell>
                        <Button onClick={() => deleteCar()} variant="contained" color="primary">
                            Delete
                        </Button>
                        </TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
                : <div />}
            </Box>
            ) : <div />}
            <Button variant="contained" color="primary" onClick={() => setIsLotsOpen(!isLotsOpen)}>Lots</Button>

{isLotsOpen ? (

<Box my="4">
<TableContainer component={Paper}>
    <Table>
    <TableHead>
        <TableRow>
        <TableCell>Lot ID</TableCell>
        <TableCell>Capacity</TableCell>
        <TableCell>Select</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {lotList ? (
            lotList.map((lot) => (
                <TableRow key={lot.parkingLotID}>
            <TableCell>{lot.parkingLotID}</TableCell>
            <TableCell>{lot.numberOfSpots}</TableCell>
            <TableCell>
                <Button onClick={() => handleLotClick(lot)} variant="contained" color="primary">
                Select
                </Button>
            </TableCell>
            </TableRow>
        ))
        ) : (
            <TableRow>
            <TableCell>no Information</TableCell>
        </TableRow>
        )}
    </TableBody>
    </Table>
    </TableContainer>
    {selectedLot ?
    <TableContainer component={Paper}>
    <Table>
        <TableHead>
        <TableRow>
            <TableCell>Lot ID</TableCell>
            <TableCell>Capacity</TableCell>
            <TableCell>Confirm</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
            <TableCell>
            <TextField type="text" className="input" value={selectedLot.parkingLotID} onChange={(e) => setSelectedLot({ ...selectedLot, parkingLotID: e.target.value })} />
            </TableCell>
            <TableCell>
            <TextField type="text" className="input" value={selectedLot.numberOfSpots} onChange={(e) => setSelectedLot({ ...selectedLot, numberOfSpots: e.target.value })} />
            </TableCell>
            <TableCell>
            <Button onClick={() => updateLots()} variant="contained" color="primary">
                Update
            </Button>
            </TableCell>
        </TableRow>
        </TableBody>
    </Table>
    </TableContainer>
    : <div />}
</Box>
) : <div />}
<Button variant="contained" color="primary" onClick={() => setIsParkedOpen(!isParkedOpen)}>Parked Cars</Button>

{isParkedOpen ? (

<Box my="4">
<TableContainer component={Paper}>
    <Table>
    <TableHead>
        <TableRow>
        <TableCell>Record ID</TableCell>
        <TableCell>Lot ID</TableCell>
        <TableCell>Car ID</TableCell>
        <TableCell>Time Entered</TableCell>
        <TableCell>Time Exited</TableCell>
        <TableCell>Select</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {parkedCarsList ? (
        parkedCarsList.map((parked) => (
            <TableRow key={parked.recordID}>
            <TableCell>{parked.recordID}</TableCell>
            <TableCell>{parked.parkinglotID}</TableCell>
            <TableCell>{parked.carID}</TableCell>
            <TableCell>{parked.timeEntered}</TableCell>
            <TableCell>{parked.timeExited}</TableCell>
            <TableCell>
                <Button onClick={() => handleParkedClick(parked)} variant="contained" color="primary">
                Select
                </Button>
            </TableCell>
            </TableRow>
        ))
        ) : (
        <TableRow>
            <TableCell>no Information</TableCell>
        </TableRow>
        )}
    </TableBody>
    </Table>
    </TableContainer>
    {selectedParkedCar ?
    <TableContainer component={Paper}>
    <Table>
        <TableHead>
        <TableRow>
            <TableCell>Record ID</TableCell>
            <TableCell>Lot ID</TableCell>
            <TableCell>Car ID</TableCell>
            <TableCell>Time Entered</TableCell>
            <TableCell>Time Exited</TableCell>
            <TableCell>Update</TableCell>
            <TableCell>Delete</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
            <TableCell>
            <TextField type="text" className="input" value={selectedParkedCar.recordID} onChange={(e) => setSelectedParkedCar({ ...selectedParkedCar, recordID: e.target.value })} />
            </TableCell>
            <TableCell>
            <TextField type="text" className="input" value={selectedParkedCar.parkinglotID} onChange={(e) => setSelectedParkedCar({ ...selectedParkedCar, parkinglotID: e.target.value })} />
            </TableCell>
            <TableCell>
            <TextField type="text" className="input" value={selectedParkedCar.carID} onChange={(e) => setSelectedParkedCar({ ...selectedParkedCar, carID: e.target.value })} />
            </TableCell>
            <TableCell>
            <TextField type="text" className="input" value={selectedParkedCar.timeEntered} onChange={(e) => setSelectedParkedCar({ ...selectedParkedCar, timeEntered: e.target.value })} />
            </TableCell>
            <TableCell>
            <TextField type="text" className="input" value={selectedParkedCar.timeExited} onChange={(e) => setSelectedParkedCar({ ...selectedParkedCar, timeExited: e.target.value })} />
            </TableCell>
            <TableCell>
            <Button onClick={() => updateParked()} variant="contained" color="primary">
                Update
            </Button>
            </TableCell>
            <TableCell>
            <Button onClick={() => deleteParkedCars()} variant="contained" color="primary">
                Delete
            </Button>
            </TableCell>
        </TableRow>
        </TableBody>
    </Table>
    </TableContainer>
    : <div />}
</Box>
) : <div />}
<Button variant="contained" color="primary" onClick={() => setNotesOpen(!isNotesOpen)}>Notifications</Button>

{isNotesOpen ? (

<Box my="4">
<TableContainer component={Paper}>
    <Table>
    <TableHead>
        <TableRow>
        <TableCell>Notification ID</TableCell>
        <TableCell>User ID</TableCell>
        <TableCell>Title</TableCell>
        <TableCell>Content</TableCell>
        <TableCell>Select</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {notifications ? (
        notifications.map((note) => (
            <TableRow key={note.notificationID}>
            <TableCell>{note.notificationID}</TableCell>
            <TableCell>{note.userID}</TableCell>
            <TableCell>{note.title}</TableCell>
            <TableCell>{note.content}</TableCell>
            <TableCell>
                <Button onClick={() => handleNoteClick(note)} variant="contained" color="primary">
                Select
                </Button>
            </TableCell>
            </TableRow>
        ))
        ) : (
        <TableRow>
            <TableCell>no Information</TableCell>
        </TableRow>
        )}
    </TableBody>
    </Table>
    </TableContainer>
    {selectedNotification ?
    <TableContainer component={Paper}>
    <Table>
        <TableHead>
        <TableRow>
            <TableCell>Notification ID</TableCell>
            <TableCell>User ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Content</TableCell>
            <TableCell>Update</TableCell>
            <TableCell>Delete</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
            <TableCell>
            <TextField type="text" className="input" value={selectedNotification.notificationID} onChange={(e) => setSelectedNotification({ ...selectedNotification, notificationID: e.target.value })} />
            </TableCell>
            <TableCell>
            <TextField type="text" className="input" value={selectedNotification.userID} onChange={(e) => setSelectedNotification({ ...selectedNotification, userID: e.target.value })} />
            </TableCell>
            <TableCell>
            <TextField type="text" className="input" value={selectedNotification.title} onChange={(e) => setSelectedNotification({ ...selectedNotification, title: e.target.value })} />
            </TableCell>
            <TableCell>
            <TextField type="text" className="input" value={selectedNotification.content} onChange={(e) => setSelectedNotification({ ...selectedNotification, content: e.target.value })} />
            </TableCell>
            <TableCell>
            <Button onClick={() => updateNots()} variant="contained" color="primary">
                Update
            </Button>
            </TableCell>
            <TableCell>
            <Button onClick={() => deleteNots()} variant="contained" color="primary">
                Delete
            </Button>
            </TableCell>
        </TableRow>
        </TableBody>
    </Table>
    </TableContainer>
    : <div />}
</Box>
) : <div />}
<Button variant="contained" color="primary" onClick={() => setTagOpen(!isTagOpen)}>Tags</Button>

{isTagOpen ? (

<Box my="4">
<TableContainer component={Paper}>
    <Table>
    <TableHead>
        <TableRow>
        <TableCell>Tag ID</TableCell>
        <TableCell>User ID</TableCell>
        <TableCell>Effective Date</TableCell>
        <TableCell>Expiration Date</TableCell>
        <TableCell>Select</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {tags ? (
        tags.map((tag) => (
            <TableRow key={tag.tagID}>
            <TableCell>{tag.userID}</TableCell>
            <TableCell>{tag.effectiveDate}</TableCell>
            <TableCell>{tag.expirationDate}</TableCell>
            <TableCell>
                <Button onClick={() => handleTagClick(tag)} variant="contained" color="primary">
                Select
                </Button>
            </TableCell>
            </TableRow>
        ))
        ) : (
        <TableRow>
            <TableCell>no Information</TableCell>
        </TableRow>
        )}
    </TableBody>
    </Table>
    </TableContainer>
    {selectedTag ?
    <TableContainer component={Paper}>
    <Table>
        <TableHead>
        <TableRow>
            <TableCell>Tag ID</TableCell>
            <TableCell>User ID</TableCell>
            <TableCell>Effective Date</TableCell>
            <TableCell>Expiration Date</TableCell>
            <TableCell>Update</TableCell>
            <TableCell>Delete</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
            <TableCell>
            <TextField type="text" className="input" value={selectedTag.tagID} onChange={(e) => setSelectedTag({ ...selectedTag, tagID: e.target.value })} />
            </TableCell>
            <TableCell>
            <TextField type="text" className="input" value={selectedTag.userID} onChange={(e) => setSelectedTag({ ...selectedTag, userID: e.target.value })} />
            </TableCell>
            <TableCell>
            <TextField type="text" className="input" value={selectedTag.effectiveDate} onChange={(e) => setSelectedTag({ ...selectedTag, effectiveDate: e.target.value })} />
            </TableCell>
            <TableCell>
            <TextField type="text" className="input" value={selectedTag.expirationDate} onChange={(e) => setSelectedTag({ ...selectedTag, expirationDate: e.target.value })} />
            </TableCell>
            <TableCell>
            <Button onClick={() => updateTags()} variant="contained" color="primary">
                Update
            </Button>
            </TableCell>
            <TableCell>
            <Button onClick={() => deleteTags()} variant="contained" color="primary">
                Delete
            </Button>
            </TableCell>
        </TableRow>
        </TableBody>
    </Table>
    </TableContainer>
    : <div />}
</Box>
) : <div />}

<Button variant="contained" color="primary" onClick={() => setCardOpen(!isCardOpen)}>Cards</Button>

{isCardOpen ? (

<Box my="4">
<TableContainer component={Paper}>
    <Table>
    <TableHead>
        <TableRow>
        <TableCell>RFID</TableCell>
        <TableCell>User ID</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {cards ? (
        cards.map((card) => (
            <TableRow key={card.rfid}>
            <TableCell>{card.rfid}</TableCell>
            <TableCell>{card.userID}</TableCell>
            <TableCell>
                <Button onClick={() => handleCardClick(card)} variant="contained" color="primary">
                Select
                </Button>
            </TableCell>
            </TableRow>
        ))
        ) : (
        <TableRow>
            <TableCell>no Information</TableCell>
        </TableRow>
        )}
    </TableBody>
    </Table>
    </TableContainer>
    {selectedCard ?
    <TableContainer component={Paper}>
    <Table>
        <TableHead>
        <TableRow>
            <TableCell>RFID</TableCell>
            <TableCell>User ID</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
            <TableCell>
            <TextField type="text" className="input" value={selectedCard.RFID} onChange={(e) => setSelectedCard({ ...selectedCard, rfid: e.target.value })} />
            </TableCell>
            <TableCell>
            <TextField type="text" className="input" value={selectedCard.userID} onChange={(e) => setSelectedCard({ ...selectedCard, userID: e.target.value })} />
            </TableCell>
            <TableCell>
            <Button onClick={() => updateCard()} variant="contained" color="primary">
                Update
            </Button>
            </TableCell>
            <TableCell>
            <Button onClick={() => deleteCard()} variant="contained" color="primary">
                Delete
            </Button>
            </TableCell>
        </TableRow>
        </TableBody>
    </Table>
    </TableContainer>
    : <div />}
</Box>
) : <div />}
        </Container>
    );
}
export default Admin;

{/*<div>
        <button onClick={() => setIsUsersOpen(!isUsersOpen)}>Users</button>
        {isUsersOpen ? (
            <div>
            <table>
                <thead>
                <tr>
                    <th>User ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Username</th>
                    <th>User Type</th>
                    <th>Select</th>
                </tr>
                </thead>
                <tbody>
                {users ? (
                    users.map((user) => (
                    <tr key={user.userID}>
                        <td>{user.userID}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.username}</td>
                        <td>{user.userType}</td>
                        <td>
                        <button onClick={() => handleUserClick(user)}>
                            Select
                        </button>
                        </td>
                    </tr>
                    ))
                ) : (
                    <tr>
                    <td>no Information</td>
                    </tr>
                )}
                </tbody>
            </table>
            {selectedUser ? 
                <table>
                <thead>
                <tr>
                    <th>User ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Username</th>
                    <th>User Type</th>
                    <th>Confirm Change</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>
                    <input 
                        type="text" 
                        className="input" 
                        value={selectedUser.userID} 
                        onChange={(e) => setSelectedUser({ ...selectedUser, userID: e.target.value })}
                    />
                    </td>
                    <td>
                    <input 
                        type="text" 
                        className="input" 
                        value={selectedUser.firstName} 
                        onChange={(e) => setSelectedUser({ ...selectedUser, firstName: e.target.value })}
                    />
                    </td>
                    <td>
                    <input 
                        type="text" 
                        className="input" 
                        value={selectedUser.lastName} 
                        onChange={(e) => setSelectedUser({ ...selectedUser, lastName: e.target.value })}
                    />
                    </td>
                    <td>
                    <input 
                        type="text" 
                        className="input" 
                        value={selectedUser.email} 
                        onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
                    />
                    </td>
                    <td>
                    <input 
                        type="text" 
                        className="input" 
                        value={selectedUser.phoneNumber} 
                        onChange={(e) => setSelectedUser({ ...selectedUser, phoneNumber: e.target.value })}
                    />
                    </td>
                    <td>
                    <input 
                        type="text" 
                        className="input" 
                        value={selectedUser.username} 
                        onChange={(e) => setSelectedUser({ ...selectedUser, username: e.target.value })}
                    />
                    </td>
                    <td>
                    <input 
                        type="text" 
                        className="input" 
                        value={selectedUser.userType} 
                        onChange={(e) => setSelectedUser({ ...selectedUser, userType: e.target.value })}
                    />
                    </td>
                    <td>
                    <button onClick={() => updateUser()}>
                            Update
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
            : <div />}
            </div>

        ) : <div />}
        <button onClick={() => setIsCarsOpen(!isCarsOpen)}>Cars</button>
        {isCarsOpen ? (
            <div>
            <table>
                <thead>
                <tr>
                    <th>Car ID</th>
                    <th>Owner ID</th>
                    <th>Color</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>License</th>
                    <th>Select</th>
                </tr>
                </thead>
                <tbody>
                {carList ? (
                    carList.map((car) => (
                    <tr key={car.carID}>
                        <td>{car.userID}</td>
                        <td>{car.color}</td>
                        <td>{car.make}</td>
                        <td>{car.model}</td>
                        <td>{car.licensePlate}</td>
                        <td>
                        <button onClick={() => handleCarClick(car)}>
                            Select
                        </button>
                        </td>
                    </tr>
                    ))
                ) : (
                    <tr>
                    <td>no Information</td>
                    </tr>
                )}
                </tbody>
            </table>
            {selectedCar ? 
                <table>
                <thead>
                <tr>
                    <th>Car ID</th>
                    <th>Owner ID</th>
                    <th>Color</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>License</th>
                    <th>Confirm</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                    <input 
                        type="text" 
                        className="input" 
                        value={selectedCar.carID} 
                        onChange={(e) => setSelectedCar({ ...selectedCar, carID: e.target.value })}
                    />
                    </td>
                    <td>
                    <input 
                        type="text" 
                        className="input" 
                        value={selectedCar.userID} 
                        onChange={(e) => setSelectedCar({ ...selectedCar, userID: e.target.value })}
                    />
                    </td><td>
                    <input 
                        type="text" 
                        className="input" 
                        value={selectedCar.color} 
                        onChange={(e) => setSelectedCar({ ...selectedCar, color: e.target.value })}
                    />
                    </td><td>
                    <input 
                        type="text" 
                        className="input" 
                        value={selectedCar.make} 
                        onChange={(e) => setSelectedCar({ ...selectedCar, make: e.target.value })}
                    />
                    </td><td>
                    <input 
                        type="text" 
                        className="input" 
                        value={selectedCar.model} 
                        onChange={(e) => setSelectedCar({ ...selectedCar, model: e.target.value })}
                    />
                    </td><td>
                    <input 
                        type="text" 
                        className="input" 
                        value={selectedCar.licensePlate} 
                        onChange={(e) => setSelectedCar({ ...selectedCar, licensePlate: e.target.value })}
                    />
                    </td>
                    <td>
                    <button onClick={() => updateCar()}>
                            Update
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
            : <div />}
            </div>

        ) : <div />}
      </div>
    */}