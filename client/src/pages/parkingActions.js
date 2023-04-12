import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ParkingTagPage = () => {
  const [licensePlate, setLicensee] = useState('');
  const [duration, setDuration] = useState(1);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // call the API to purchase the parking tag
    api.purchaseParkingTag(licensePlate, duration)
      .then((response) => {
        // navigate to the confirmation page
        history.push('/parking-tag-confirmation');
      })
      .catch((error) => {
        // handle the error
        console.error(error);
      });
  };

  // const purchaseParkingTag = async (licensePlate, duration) => {
  //   const response = await fetch('/api/purchaseParkingTag', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ licensePlate, duration }),
  //   });
  //   const data = await response.json();
  //   return data;
  // };

  return (
    <div>
      <h1>Purchase Parking Tag</h1>
      <form onSubmit={handleSubmit}>
        <label>
          License Plate:
          <input type="text" value={licensePlate} onChange={(e) => setLicensePlate(e.target.value)} />
        </label>
        <label>
          Duration:
          <select value={duration} onChange={(e) => setDuration(e.target.value)}>
            <option value={1}>1 hour</option>
            <option value={2}>2 hours</option>
            <option value={3}>3 hours</option>
          </select>
        </label>
        <button type="submit">Purchase Parking Tag</button>
      </form>
    </div>
  );
};

export default ParkingTagPage;
