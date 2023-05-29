import { createSlice } from '@reduxjs/toolkit';
import { useUserInfo } from "../../react-query";
// Part1: Define Slice (including reducers and actions)
const workItems = [];
const initialState = { workItems };
const { data: userInfo} = useUserInfo();
const workSlice = createSlice({
  name: 'work',
  initialState,
  reducers: {
    addworkItems: (state, action) => {
      const item = action.payload;
      const product = state.workItems.find((x) => x.id === item.id);
      if (!!product && userInfo.name==product.name) {
         const workItems = state.workItems.map((x) =>
            x.id === product.id ? item : x
         );
         state.workItems = workItems;
      } else {
        state.workItems = [...state.workItems, item];
      }
    },
    removeworkItems: (state, action) => {
      state.workItems = state.workItems.filter((x) => x.id !== action.payload);
    },
  },
});

// export state to global
export const selectworkItems = (state) => state.work.workItems;

// export actions to global
export const { addworkItems, removeworkItems } = workSlice.actions;

// export reducer to global
export default workSlice.reducer;