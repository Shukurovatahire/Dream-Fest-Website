import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Concert {
  concert_id: string;
  name: string;
  endDate: string;
  image: string;
  quantity: number;
}
interface IFormData {
  name: string;
  surname: string;
  mobile: number;
  email: string;
}
interface ICardData {
  name: string;
  surname: string;
  cartNumber: number;
  year: number;
  month: number;
  ssc: number;
}

interface CartState {
  items: Concert[];
  formData: IFormData[];
  totalPrice: number;
  cardData:ICardData[]
}

const initialState: CartState = {
  items: [],
  formData: [],
  totalPrice: 0,
  cardData: [],
};

const ticketPrice = 35;

const cartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addTocart: (state, action: PayloadAction<Concert>) => {
      const existingItem = state.items.find(
        (item) => item.concert_id === action.payload.concert_id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.quantity * ticketPrice,
        0
      );
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.concert_id !== action.payload
      );
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.quantity * ticketPrice,
        0
      );
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(
        (item) => item.concert_id === action.payload
      );
      if (item) {
        item.quantity += 1;
      }
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.quantity * ticketPrice,
        0
      );
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(
        (item) => item.concert_id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.quantity * ticketPrice,
        0
      );
    },
    saveFormData: (state, action) => {
      state.formData = [action.payload];
    },
    clearFormData: (state) => {
      state.formData = [];
    },
    saveCardData:(state,action)=>{
      state.cardData.push(action.payload)
    }
  },
});
export default cartSlice.reducer;
export const {
  addTocart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  saveFormData,
  clearFormData,
  saveCardData
} = cartSlice.actions;
