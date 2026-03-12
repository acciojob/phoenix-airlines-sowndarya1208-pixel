import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFlight } from "../redux/bookingSlice";

const FlightSearch = ({ goBooking }) => {

  const dispatch = useDispatch();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleBook = () => {

    dispatch(setFlight({ from, to }));

    goBooking();
  };

  return (
    <div>

      <h2>Search Flights</h2>

      <label>
        <input type="radio" name="trip"/>
        One Way
      </label>

      <label>
        <input type="radio" name="trip"/>
        Round Trip
      </label>

      <br/>

      <input
        type="text"
        placeholder="From"
        onChange={(e)=>setFrom(e.target.value)}
      />

      <input
        type="text"
        placeholder="To"
        onChange={(e)=>setTo(e.target.value)}
      />

      <button>Search</button>

      <ul>
        {from && to ? (
          <li>
            {from} → {to}
            <button className="book-flight" onClick={handleBook}>
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
