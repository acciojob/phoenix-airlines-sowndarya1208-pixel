import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFlight } from "../state/bookingSlice";

const FlightSearch = ({ goBooking }) => {

  const dispatch = useDispatch();

  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [result, setResult] = useState(null);
  const [journeyDate, setJourneyDate] = useState("");

  // ✅ Added cities list
  const cities = ["Bengaluru","Mumbai","Delhi","Chennai"];

  const handleSearch = () => {

    if (from && to) {
      setResult(`${from} ${to}`);
    } else {
      setResult("No Flights Available");
    }
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

      <br/>

      <input
        type="text"
        placeholder="Source City"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />

      {/* ✅ Added city list for source */}
      <ul>
        {cities.map((city,index)=>(
          <li key={index} onClick={()=>setFrom(city)}>
            {city}
          </li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Destination City"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />

      {/* ✅ Added city list for destination */}
      <ul>
        {cities.map((city,index)=>(
          <li key={index} onClick={()=>setTo(city)}>
            {city}
          </li>
        ))}
      </ul>

      <input 
          type="date"
          placeholder="dd/mm/yy"
          onChange={(e) => setJourneyDate(e.target.value)}
      />

      <button onClick={handleSearch}>Search Flight</button>

      <ul>

        {result === "No Flights Available" && (
          <li>No Flights Available</li>
        )}

        {result && result !== "No Flights Available" && (
          <li>
            {from} → {to}
            <button className="book-flight" onClick={handleBook}>
              Book
            </button>
          </li>
        )}

      </ul>

    </div>
  );
};

export default FlightSearch;
