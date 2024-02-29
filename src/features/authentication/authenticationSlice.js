import { createSlice } from '@reduxjs/toolkit';
import { signIn, signUp, signOut } from '../../redux/'; 

const initialState = {
  currentUser: null,
  token: "",
  error: "",
  loading: false,
  isAuthenticated: false,
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Add similar cases for signUp and signOut
  },
});

export default authenticationSlice.reducer;