import React, { useState } from "react";


export function Home  () {
 const [Lot, setLot] = useState(0);
  
  // Function is called everytime increment button is clicked
function handleClick1 (){
    // Counter state is incremented
    setLot(Lot + 1);
  }
  
  // Function is called everytime decrement button is clicked
  function handleClick2 () {
    // Counter state is decremented
    setLot(Lot - 1);
  }
  
  return (
    <article>
<div className="row">
  {/* remove +2 and +3 just used for dummy data */}
     <div className="column">parking lot 1: {Lot} </div>  
     <div className="column">parking lot 2: {Lot+2} </div>
     <div className="column">parking lot 3: {Lot +3} </div>
</div>
    <button onClick={handleClick1}>Increment</button>
    <button onClick={handleClick2}>Decrement</button>
</article>
  );
}
export default Home;
