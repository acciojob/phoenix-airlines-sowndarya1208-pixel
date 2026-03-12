import React, { useState } from "react";

const FlightBooking = ({ goConfirm }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const submitForm = () => {

    if (!name || !email || !phone) {
      setError("All fields are required");
      return;
    }

    setError("");
    goConfirm();
  };

  return (
    <div>

      <h2>Passenger Details</h2>

      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Phone"
        onChange={(e) => setPhone(e.target.value)}
      />

      {error && <p>{error}</p>}

      <button onClick={submitForm}>
        Confirm Booking
      </button>

    </div>
  );
};

export default FlightBooking;
