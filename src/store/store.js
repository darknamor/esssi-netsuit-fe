import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { billingSlice } from './billing';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    billing: billingSlice.reducer,
  },
});
