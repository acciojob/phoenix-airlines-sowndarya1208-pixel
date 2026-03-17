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

  const [showFrom,setShowFrom] = useState(false);
  const [showTo,setShowTo] = useState(false);

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

      {/* Source City */}
      <input
        type="text"
        placeholder="Source City"
        value={from}
        onClick={()=>setShowFrom(true)}
        readOnly
      />

      {showFrom && (
        <ul>
          {cities.map((city,index)=>(
            <li key={index} onClick={()=>{setFrom(city); setShowFrom(false);}}>
              {city}
            </li>
          ))}
        </ul>
      )}

      {/* Destination City */}
      <input
        type="text"
        placeholder="Destination City"
        value={to}
        onClick={()=>setShowTo(true)}
        readOnly
      />

      {showTo && (
        <ul>
          {cities.map((city,index)=>(
            <li key={index} onClick={()=>{setTo(city); setShowTo(false);}}>
              {city}
            </li>
          ))}
        </ul>
      )}

      <input 
        type="date"
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
