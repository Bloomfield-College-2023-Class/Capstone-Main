import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ParkingTagPage = () => {
  const [licensePlate, setLicensePlate] = useState('');
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

  const handleRedirect = () => {
	const redirectUrl =
  	'https://mybloomfield.bloomfield.edu/Pages/WebAdvisor.aspx?title=Parking+Tag+Application+-+Students&pid=ST-XWEPARK01';
	window.location.href = redirectUrl;
  };

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
    	<button type="submit">Students parking Tag from bloomfield</button>
  	</form>
  	<button onClick={handleRedirect}>Redirect</button>
	</div>
  );
};

export default ParkingTagPage;
