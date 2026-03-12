import React from "react";
import { useSelector } from "react-redux";

const Confirmation = ({ goHome }) => {

  const flight = useSelector((state)=>state.booking.flight);
  const passenger = useSelector((state)=>state.booking.passenger);

  return (
    <div>

      <h2>Booking Confirmed</h2>

      {flight && (
        <p>
          Flight: {flight.from} → {flight.to}
        </p>
      )}

      {passenger && (
        <p>
          Passenger: {passenger.name}
        </p>
      )}

      <button onClick={goHome}>
        Go Home
      </button>

    </div>
  );
};

export default Confirmation;
