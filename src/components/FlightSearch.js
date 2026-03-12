import React, { useState } from "react";

const FlightSearch = ({ goBooking }) => {

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const searchFlight = () => {
    if (from && to) {
      return true;
    }
    return false;
  };

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

      <br/>

      <input
        type="text"
        placeholder="From"
        onChange={(e) => setFrom(e.target.value)}
      />

      <input
        type="text"
        placeholder="To"
        onChange={(e) => setTo(e.target.value)}
      />

      <button onClick={searchFlight}>Search</button>

      <ul>
        {from && to ? (
          <li>
            {from} → {to}
            <button
              className="book-flight"
              onClick={() => goBooking({ from, to })}
            >
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
