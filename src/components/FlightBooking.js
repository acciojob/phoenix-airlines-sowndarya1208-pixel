import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPassenger } from "../state/bookingSlice";

const FlightBooking = ({ goConfirm }) => {

  const dispatch = useDispatch();

  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [mobile,setMobile] = useState("");
  const [error,setError] = useState("");

  const handleSubmit = () => {

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

      <h2>Booking Confirmation For Flight Air India (AI-275) </h2>

      <div>
        <label>First Name</label><br/>
        <input
          type="text"
          value={firstName}
          onChange={(e)=>setFirstName(e.target.value)}
        />
      </div>

      <div>
        <label>Last Name</label><br/>
        <input
          type="text"
          value={lastName}
          onChange={(e)=>setLastName(e.target.value)}
        />
      </div>

      <div>
        <label>Email ID</label><br/>
        <input
          type="text"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Mobile Number</label><br/>
        <input
          type="text"
          value={mobile}
          onChange={(e)=>setMobile(e.target.value)}
        />
      </div>

      {error && <p>{error}</p>}

      <button onClick={handleSubmit}>
        Confirm Booking
      </button>

    </div>
  );
};

export default FlightBooking;
