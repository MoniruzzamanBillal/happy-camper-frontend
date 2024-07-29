import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCartItem = {
  pid: string;
  oquantity: number;
};

type TCartState = {
  cartProduct: TCartItem[];
};

const initialState: TCartState = {
  cartProduct: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ! for adding cart data
    setCartItem(state, action: PayloadAction<TCartItem[]>) {
      state.cartProduct = action.payload;
    },

    // ! clear cart data
    clearCartItem(state) {
      state.cartProduct = [];
    },

    //
  },
});

export const { setCartItem, clearCartItem } = cartSlice.actions;
export default cartSlice.reducer;
