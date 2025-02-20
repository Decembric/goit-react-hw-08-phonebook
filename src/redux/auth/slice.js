import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";




const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null
    },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    isRefreshing: false,
    isError: false
},

  extraReducers: builder => builder.addCase(register.pending, state => {
state.isLoading = true
  }).addCase(register.fulfilled, (state, action) => {
    state.isLoading = false
    state.user = action.payload.user
    state.token = action.payload.token
  }).addCase(register.rejected, state => {
    state.isLoading = false
    state.isError =true
  }).addCase(login.pending, state => {
state.isLoading = true
  }).addCase(login.fulfilled, (state, action) => {
    state.isLoading = false
    state.isLoggedIn = true
    state.user = action.payload.user
    state.token = action.payload.token
  }).addCase(login.rejected, state => {
    state.isLoading = false
    state.isError = true
  }).addCase(logout.pending, state => {
    state.isLoading = true 
  }).addCase(logout.fulfilled, state => {
    state.user = {
      name: null,
      email: null
    }
    state.isLoading = false
    state.token = null
    state.isLoggedIn = false
  }).addCase(logout.rejected, state => {
    state.isLoading = false
    state.isError = true
  }).addCase(refreshUser.pending, state => {
state.isRefreshing = true
  }).addCase(refreshUser.fulfilled, (state, action) => {
    state.user = action.payload
    state.isLoading = false
    state.isLoggedIn = true
    state.isRefreshing = false
  }).addCase(refreshUser.rejected, state => {
    state.isLoading = false
    state.isError = true
  })
  
})

export const authReducer = authSlice.reducer


