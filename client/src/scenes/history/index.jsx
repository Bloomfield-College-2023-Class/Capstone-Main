import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DateTime } from "luxon";


const History = () => {

    const navigate = useNavigate();
    const ParkedCars = useSelector((state) => state.global.ParkedCars);

    //Async function will go here to populate the list,
    //or a direct link to it.  Until done we will use dummy
    //data

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>license</th>
                    <th>Lot</th>
                    <th>In</th>
                    <th>Out</th>
                    <th>duration</th>
                </tr>
                </thead>
                <tbody>
                    {ParkedCars.map(y => {
                        return (
                            <tr key={y.carId}>
                                <td>{ y.carId }</td>
                                <td>{ y.parkingLotId }</td>
                                <td>{ y.timeEntered }</td>
                                <td>{ y.timeExited }</td>
                                <td>{ 
                                    DateTime.fromISO(y.timeExited).diff(DateTime.fromISO(y.timeEntered, 'months')).shiftTo('hours').toString()
                                }</td>
                                <td></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button>Add Vehicle</button>
        </div>
    )
}

export default History;