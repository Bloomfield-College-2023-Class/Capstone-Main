import React, { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {
  const [carList, setCarList] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();
  const [lotList, setLotList] = useState([]);
  const [isUsersOpen, setIsUsersOpen] = useState(false);
  const [isCarsOpen, setIsCarsOpen] = useState(false);
  const [isLotsOpen, setIsLotsOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState();

  const fillUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/users");
      setUsers(response.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const fillCars = async () => {
    try {
        const response = await axios.get("http://localhost:8080/getCars");
        setCarList(response.data);
      } catch (error) {
        alert(error.message);
      }
  }

  const updateUser = async () => {
        try {
            const response = await axios.patch('http://localhost:8080/updateUser', {
                username: selectedUser.userName,
                userID: selectedUser.userID,
                phoneNumber: selectedUser.phoneNumber,
                email: selectedUser.email,
                firstName: selectedUser.firstName,
                lastName: selectedUser.lastName,
                userType: selectedUser.userType
            })
            alert("update successful")
        } catch (error) {
            alert(error.message)
        }
    }

    const updateCar = async () => {
        try {
            const response = await axios.patch('http://localhost:8080/updateCar', {
                carID: selectedCar.carID,
                userID: selectedCar.userID,
                color: selectedCar.color,
                make: selectedCar.make,
                model: selectedCar.model,
                licensePlate: selectedCar.licensePlate
            })
            alert("update successful")
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

  useEffect(() => {
    fillUsers();
    fillCars();
  }, []);

  return (
    <div>
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
  );
};

export default Admin;
