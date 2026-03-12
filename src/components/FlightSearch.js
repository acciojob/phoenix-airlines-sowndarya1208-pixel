import React, { useState } from "react";

const FlightSearch = ({ goBooking }) => {

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <div>

      <h2>Search Flights</h2>

      <label>
        <input type="radio" name="trip" />
        One Way
      </label>

      <label>
        <input type="radio" name="trip" />
        Round Trip
      </label>

      <div>

        <select onChange={(e) => setFrom(e.target.value)}>
          <option value="">From</option>
          <option>Delhi</option>
          <option>Chennai</option>
        </select>

        <select onChange={(e) => setTo(e.target.value)}>
          <option value="">To</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
        </select>

        <button>Search</button>

      </div>

      <ul>
        {from && to ? (
          <li>
            {from} → {to}
            <button className="book-flight" onClick={goBooking}>
              Book
            </button>
          </li>
        ) : (
          <li>No Flights Available</li>
        )}
      </ul>

    </div>
  );
};

export default FlightSearch;
