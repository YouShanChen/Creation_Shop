import { createSlice } from '@reduxjs/toolkit';

// Part1: Define Slice (including reducers and actions)
const state = 0;
const initialState = { state };
const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    addState:(state,action) => {
        const next=action.payload;
        if(state.state>7){
            state.state=0;
        }else{
            state.state = state.state+next;
        }
        

    }
    
    },
  },
);

// export state to global
export const selectState= (state) => state.state.state;

// export actions to global
export const { addState } = stateSlice.actions;

// export reducer to global
export default stateSlice.reducer;
