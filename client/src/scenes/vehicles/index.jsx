import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Vehicles = () => {
  const Car = useSelector((state) => state.global.Car);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>License</th>
            <th>Make</th>
            <th>Model</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {Car.map((x) => {
            return (
              <tr key={x.carId}>
                <td>{x.license}</td>
                <td>{x.make}</td>
                <td>{x.model}</td>
                <td>{x.color}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button>Add Vehicle</button>
    </div>
  );
};

export default Vehicles;
