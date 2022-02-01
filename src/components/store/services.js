import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  data: [],
  userServices: [],
};

const slice = createSlice({
  name: "services",
  initialState,
  reducers: {
    getServices: (services, action) => {
      action.payload.map((service) => services.data.push(service));
    },
    setUserData: (services, { payload }) => {
      return { ...services, userServices: { ...payload } };
    },
  },
});

export const { getServices, setUserData } = slice.actions;

export default slice.reducer;
