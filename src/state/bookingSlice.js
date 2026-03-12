import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    passenger: null
  },
  reducers: {
    setPassenger: (state, action) => {
      state.passenger = action.payload;
    }
  }
});

export const { setPassenger } = bookingSlice.actions;
export default bookingSlice.reducer;
