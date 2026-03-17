import React from "react";

const Confirmation = ({ goHome }) => {

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>

      <p>
        Thank you for the Booking. Click the below button to return to home page.
      </p>

      <button onClick={goHome}>
        BACK TO HOME
      </button>

    </div>
  );
};

export default Confirmation;
