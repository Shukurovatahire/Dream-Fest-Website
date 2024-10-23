import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Item from "antd/es/list/Item";

export interface Concert {
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

export interface CartState {
  items: Concert[];
  formData: IFormData[];
  totalPrice: number;
  cardData: ICardData[];
}

const ticketPrice = 35;

const loadCartFromLocalStorage = (): CartState => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  if (currentUser && currentUser.userId) {
    const cart = JSON.parse(
      localStorage.getItem(`currentUserCart_${currentUser.userId}`) || "[]"
    );
    return {
      items: cart,
      formData: [],
      totalPrice: currentUser.cart.reduce(
        (acc: any, item: Concert) => acc + item.quantity * ticketPrice,
        0
      ),
      cardData: [],
    };
  }
  return {
    items: [],
    formData: [],
    totalPrice: 0,
    cardData: [],
  };
};

const initialState: CartState = loadCartFromLocalStorage();
// Helper function to calculate total price
const calculateTotalPrice = (items: Concert[]): number => {
  if (!Array.isArray(items) || items.length === 0) {
    return 0;
  }
  return items.reduce((total, item) => {
    return total + item.quantity * ticketPrice;
  }, 0);
};

// LocalStorage Update
export const updateLocalStorage = (items: Concert[],) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  if (currentUser && currentUser.userId) {
    currentUser.cart = items;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    localStorage.setItem(
      `currentUserCart_${currentUser.userId}`,
      JSON.stringify(items)
    );
  }
  // Update allUsers
  const allUsers = JSON.parse(localStorage.getItem("allUsers") || "[]");
  const userIndex = allUsers.findIndex(
    (user:any) => user.userId === currentUser.userId
  );

  if (userIndex !== -1) {
    allUsers[userIndex].cart = items; // Kullanıcının sepetini güncelle
  } else {
    // Eğer kullanıcı bulunamazsa, yeni bir kullanıcı ekleyebilirsiniz.
    allUsers.push(currentUser);
  }

  // Tüm kullanıcıları localStorage'a kaydet
  localStorage.setItem("allUsers", JSON.stringify(allUsers));
};

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
      const currentUserId = JSON.parse(
        localStorage.getItem("currentUser") || "{}"
      ).userId;

      localStorage.setItem(
        `currentUserCart_${currentUserId}`,
        JSON.stringify(state.items)
      );

      state.totalPrice = calculateTotalPrice(state.items);
      updateLocalStorage(state.items);
    },
    loadCart: (state, action: PayloadAction<Concert[]>) => {
      state.items = action.payload; //  Load Cart from LocalStorage
      updateLocalStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      state.formData = [];
      state.cardData = [];
      state.totalPrice = 0;

      updateLocalStorage(state.items);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const currentUserId = JSON.parse(
        localStorage.getItem("currentUser") || "{}"
      ).userId;
      state.items = state.items.filter(
        (item) => item.concert_id !== action.payload
      );
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.quantity * ticketPrice,
        0
      );

      updateLocalStorage(state.items);
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

      state.totalPrice = calculateTotalPrice(state.items);
      updateLocalStorage(state.items);
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

      state.totalPrice = calculateTotalPrice(state.items);
      updateLocalStorage(state.items);
    },
    saveFormData: (state, action) => {
      state.formData = [action.payload];
    },
    clearFormData: (state) => {
      state.formData = [];
    },
    saveCardData: (state, action) => {
      state.cardData.push(action.payload);
    },
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
  saveCardData,
  clearCart,
  loadCart,
} = cartSlice.actions;
