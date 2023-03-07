import React, { useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  // Signing the user out
  
  const [Lot, setLot] = useState(0);
  const user = useSelector((state) => state.global.user);

  // Function is called every time increment button is clicked
  function handleClick1() {
    // Counter state is incremented
    setLot(Lot + 1);
  }

  // Function is called every time decrement button is clicked
  function handleClick2() {
    // Counter state is decremented
    setLot(Lot - 1);
  }

  return (
    <article>
      <h1>Hello {user.firstName}</h1>
      <div className="row">
        {/* remove +2 and +3 just used for dummy data */}
        <div className="column">parking lot 1: {Lot} </div>
        <div className="column">parking lot 2: {Lot + 2} </div>
        <div className="column">parking lot 3: {Lot + 3} </div>
      </div>
      <button onClick={handleClick1}>Increment</button>
      <button onClick={handleClick2}>Decrement</button>
    </article>
  );
};

export default Home;
