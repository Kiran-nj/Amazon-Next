// nextSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreProduct } from '@/type';

interface NextState {
  productData: StoreProduct[];
  favoriteData: StoreProduct[];
  allProducts: StoreProduct[];
  userInfo: null | string;
}

const initialState: NextState = {
  productData: [],
  favoriteData: [],
  allProducts: [],
  userInfo: null,
};

export const nextSlice = createSlice({
  name: 'next',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<StoreProduct>) => {
      const existingProduct = state.productData.find(item => item._id === action.payload._id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.productData.push({ ...action.payload, quantity: 1 });
      }
    },
    addToFavorites: (state, action: PayloadAction<StoreProduct>) => {
      const existingProduct = state.favoriteData.find(item => item._id === action.payload._id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.favoriteData.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
        const existingProduct = state.productData.find(
          (item: StoreProduct) => item._id === action.payload._id
        );
        existingProduct && existingProduct.quantity++;
      },
      decreaseQuantity: (state, action) => {
        const existingProduct = state.productData.find(
          (item: StoreProduct) => item._id === action.payload._id
        );
        if (existingProduct?.quantity === 1) {
          existingProduct.quantity = 1;
        } else {
          existingProduct!.quantity--;
        }
      },
      deleteProduct: (state, action) => {
        state.productData = state.productData.filter(
          (item) => item._id !== action.payload
        );
      },
      deleteFavorite: (state, action) => {
        state.favoriteData = state.favoriteData.filter(
          (item) => item._id !== action.payload
        );
      },
      resetCart: (state) => {
        state.productData = [];
      },
      resetFavoriteData: (state) => {
        state.favoriteData = [];
      },
  
      addUser: (state, action) => {
        state.userInfo = action.payload;
      },
      removeUser: (state) => {
        state.userInfo = null;
      },
      setAllProducts: (state, action) => {
        state.allProducts = action.payload;
      },
  },
});

export const { addToCart, addToFavorites,resetCart ,deleteProduct,resetFavoriteData,decreaseQuantity,addUser,increaseQuantity,setAllProducts,removeUser} = nextSlice.actions;

export default nextSlice.reducer;
