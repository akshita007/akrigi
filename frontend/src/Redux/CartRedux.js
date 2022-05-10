import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const duplicate=state.products.find(item=>item.id===action.payload.id);
      if(!duplicate){
        state.products.push(action.payload);
        state.total += action.payload.price;
    }else{
      return state
    }
    },
    removeProduct:(state,action)=>{
      const updatedCart=state.products.filter(item=>item.id!==action.payload.id);
      state.products=updatedCart;
      state.total -= Number(action.payload.price);
    },
    emptyCart:(state,action)=>{
      state.products=[];
      state.total =0;    }
  },
});

export const { addProduct ,removeProduct,emptyCart } = cartSlice.actions;
export default cartSlice.reducer;