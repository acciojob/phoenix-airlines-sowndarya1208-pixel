import React, { useState } from "react";
import FlightSearch from "./FlightSearch";
import FlightBooking from "./FlightBooking";
import Confirmation from "./Confirmation";

const App = () => {

  const [page, setPage] = useState("search");
  const [flight, setFlight] = useState(null);

  return (
    <div>

      <h1>Welcome to Flight Booking App</h1>

      {page === "search" && (
        <FlightSearch
          goBooking={(flightData) => {
            setFlight(flightData);
            setPage("booking");
          }}
        />
      )}

      {page === "booking" && (
        <FlightBooking
          flight={flight}
          goConfirm={() => setPage("confirm")}
        />
      )}

      {page === "confirm" && (
        <Confirmation goHome={() => setPage("search")} />
      )}

    </div>
  );
};

export default App;
