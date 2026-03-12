import React, { useState } from "react";
import FlightSearch from "./FlightSearch";
import FlightBooking from "./FlightBooking";
import Confirmation from "./Confirmation";

const App = () => {

  const [page, setPage] = useState("home");

  return (
    <div>

      <h1>Flight Booking App</h1>

      {page === "home" && (
        <button onClick={() => setPage("search")}>
          Search Flights
        </button>
      )}

      {page === "search" && (
        <FlightSearch goBooking={() => setPage("booking")} />
      )}

      {page === "booking" && (
        <FlightBooking goConfirm={() => setPage("confirm")} />
      )}

      {page === "confirm" && (
        <Confirmation goHome={() => setPage("home")} />
      )}

    </div>
  );
};

export default App;
