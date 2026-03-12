import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFlight } from "../state/bookingSlice";

const FlightSearch = ({ goBooking }) => {

  const dispatch = useDispatch();

  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    setSearched(true);
  };

  const handleBook = () => {

    dispatch(
      setFlight({
        from: from,
        to: to,
        tripType: tripType
      })
    );

    goBooking();
  };

  return (
    <div>

      <h2>Search Flights</h2>

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

      <br />

      <input
        type="text"
        placeholder="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />

      <input
        type="text"
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      <ul>
        {searched ? (
          from && to ? (
            <li>
              {from} → {to}
              <button className="book-flight" onClick={handleBook}>
                Book
              </button>
            </li>
          ) : (
            <li>No Flights Available</li>
          )
        ) : null}
      </ul>

    </div>
  );
};

export default FlightSearch;
