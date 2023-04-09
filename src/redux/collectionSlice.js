import { createSlice } from '@reduxjs/toolkit';

// Part1: Define Slice (including reducers and actions)
const collectionItems = [];
const initialState = { collectionItems };
const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    addCollectionItems: (state, action) => {
      const item = action.payload;
      const product = state.collectionItems.find((x) => x.id === item.id);
      if (!!product) {
         const collectionItems = state.collectionItems.map((x) =>
            x.id === product.id ? item : x
         );
         state.collectionItems = collectionItems;
      } else {
        state.collectionItems = [...state.collectionItems, item];
      }
    },
    removeCollectionItems: (state, action) => {
      state.collectionItems = state.collectionItems.filter((x) => x.id !== action.payload);
    },
  },
});

// export state to global
export const selectCollectionItems = (state) => state.collection.collectionItems;

// export actions to global
export const { addCollectionItems, removeCollectionItems } = collectionSlice.actions;

// export reducer to global
export default collectionSlice.reducer;