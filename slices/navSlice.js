import { createSlice } from '@reduxjs/toolkit'

//set initial state
const initialState = { 
    origin: null,
    destination: null,
    travelTimeInformation: null,

}
//reducers help dispatch information
const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin:(state, action) => {
      state.origin = action.payload;
    },
    setDestination:(state, action) => {
        state.destination = action.payload;
      },
    setTravelTimeInformation:(state, action) => {
        state.travelTimeInformation = action.payload;
    }
    }

})

//destructure so the action can be used across our app
export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions

//selectors help pull information back from data layer
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation; 

export default navSlice.reducer;