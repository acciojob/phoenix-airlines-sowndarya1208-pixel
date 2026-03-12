import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPassenger } from "../state/bookingSlice";

const FlightBooking = ({ goConfirm }) => {

  const dispatch = useDispatch();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [error,setError] = useState("");

  const submitForm = () => {

    if(!name || !email || !phone){
      setError("All fields required");
      return;
    }

    dispatch(setPassenger({name,email,phone}));

    goConfirm();
  };

  return (
    <div>

      <h2>Passenger Details</h2>

      <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>

      <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>

      <input type="text" placeholder="Phone" onChange={(e)=>setPhone(e.target.value)}/>

      {error && <p>{error}</p>}

      <button onClick={submitForm}>
        Confirm Booking
      </button>

    </div>
  );
};

export default FlightBooking;
