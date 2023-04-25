
const ParkingTagPage = () => {
  
  const handleRedirect = () => {
	const redirectUrl =
  	'https://mybloomfield.bloomfield.edu/Pages/WebAdvisor.aspx?title=Parking+Tag+Application+-+Students&pid=ST-XWEPARK01';
	window.location.href = redirectUrl;
  };

  return (
	<div>
  	<h1>Purchase Parking Tag</h1>
  	<button onClick={handleRedirect}>Redirect</button>
	</div>
  );
};

export default ParkingTagPage;
