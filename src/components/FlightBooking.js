import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPassenger } from "../redux/bookingSlice";

const FlightBooking = ({ goConfirm }) => {

  const dispatch = useDispatch();

  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [mobile,setMobile] = useState("");
  const [error,setError] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if(!firstName || !lastName || !email || !mobile){
      setError("All fields are required");
      return;
    }

    dispatch(
      setPassenger({
        firstName,
        lastName,
        email,
        mobile
      })
    );

    goConfirm();
  };

  return (
    <div>

      <h2>Passenger Details</h2>

      <form onSubmit={handleSubmit}>

        <label>First Name</label><br/>
        <input
          type="text"
          value={firstName}
          onChange={(e)=>setFirstName(e.target.value)}
        /><br/><br/>

        <label>Last Name</label><br/>
        <input
          type="text"
          value={lastName}
          onChange={(e)=>setLastName(e.target.value)}
        /><br/><br/>

        <label>Email ID</label><br/>
        <input
          type="text"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        /><br/><br/>

        <label>Mobile Number</label><br/>
        <input
          type="text"
          value={mobile}
          onChange={(e)=>setMobile(e.target.value)}
        /><br/><br/>

        {error && <p>{error}</p>}

        <button type="submit">
          Confirm Booking
        </button>

      </form>

    </div>
  );
};

export default FlightBooking;
