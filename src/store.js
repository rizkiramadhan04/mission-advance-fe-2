import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux/userSlice';

// Ambil user dari localStorage jika ada
const persistedUser = JSON.parse(localStorage.getItem('loggedInUser'));

const preloadedState = {
  user: {
    user: persistedUser || null,
  },
};

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState,
});

export default store;