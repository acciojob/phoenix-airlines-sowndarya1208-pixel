import React, { useState } from "react";
import "../styles/App.css";

const flightsData = [
  { id: 1, from: "Delhi", to: "Mumbai", price: 5000 },
  { id: 2, from: "Chennai", to: "Bangalore", price: 3000 },
  { id: 3, from: "Delhi", to: "Chennai", price: 6000 }
];

const App = () => {

  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [flights, setFlights] = useState([]);

  const searchFlights = () => {
    const result = flightsData.filter(
      (f) => f.from === from && f.to === to
    );
    setFlights(result);
  };

  return (
    <div>

      <h1>Flight Booking App</h1>

      <div>

        <label>
          <input
            type="radio"
            name="trip"
            value="oneway"
            checked={tripType === "oneway"}
            onChange={(e) => setTripType(e.target.value)}
          />
          One Way
        </label>

        <label>
          <input
            type="radio"
            name="trip"
            value="roundtrip"
            checked={tripType === "roundtrip"}
            onChange={(e) => setTripType(e.target.value)}
          />
          Round Trip
        </label>

      </div>

      <div>

        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          <option value="">From</option>
          <option value="Delhi">Delhi</option>
          <option value="Chennai">Chennai</option>
        </select>

        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="">To</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
        </select>

        <button onClick={searchFlights}>Search Flights</button>

      </div>

      <ul>
        {flights.length === 0 ? (
          <li>No Flights Available</li>
        ) : (
          flights.map((flight) => (
            <li key={flight.id}>
              {flight.from} → {flight.to} ₹{flight.price}
            </li>
          ))
        )}
      </ul>

    </div>
  );
};

export default App;
