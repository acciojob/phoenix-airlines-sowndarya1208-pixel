import React from "react";
import { useSelector } from "react-redux";

const Confirmation = ({ goHome }) => {

  const passenger = useSelector((state) => state.booking.passenger);

  return (
    <div>

      <h2>Booking Confirmed</h2>

      {passenger && (
        <div>
          <p>Name: {passenger.name}</p>
          <p>Email: {passenger.email}</p>
          <p>Phone: {passenger.phone}</p>
        </div>
      )}

      <button onClick={goHome}>
        Go Home
      </button>

    </div>
  );
};

export default Confirmation;
