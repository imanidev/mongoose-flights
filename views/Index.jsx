import React from "react";

const FlightsList = ({ flights }) => (
  <div>
    <h1>All Flights</h1>
    {flights.map((flight) => (
      <div key={flight._id}>
        <h2>
          {flight.airline} - Flight No: {flight.flightNo}
        </h2>
        <p>Departs: {new Date(flight.departs).toLocaleString()}</p>
      </div>
    ))}
  </div>
);

export default FlightsList;

