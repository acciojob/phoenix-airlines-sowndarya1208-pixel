import React, { useState } from "react";
import "../styles/App.css";

const App = () => {

  const [page, setPage] = useState("search");

  return (
    <div>

      {/* Flight Search Page */}
      {page === "search" && (
        <div>

          <h2>Flight Search</h2>

          <input type="text" placeholder="Source" />
          <input type="text" placeholder="Destination" />
          <input type="date" />

          <button
            className="book-flight"
            onClick={() => setPage("booking")}
          >
            Book Flight
          </button>

        </div>
      )}

      {/* Flight Booking Page */}
      {page === "booking" && (
        <div>

          <h2>Passenger Details</h2>

          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone" />

          <button onClick={() => setPage("confirm")}>
            Confirm Booking
          </button>

        </div>
      )}

      {/* Confirmation Page */}
      {page === "confirm" && (
        <div>

          <h2>Booking Confirmed</h2>

          <p>Your flight ticket has been booked successfully.</p>

          <button onClick={() => setPage("search")}>
            Go Home
          </button>

        </div>
      )}

    </div>
  );
};

export default App;

