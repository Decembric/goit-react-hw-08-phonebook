import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

axios.defaults.baseURL = "https://connections-api.goit.global"

const setAuthHeader = (token) => {
axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ""
}

export const register = createAsyncThunk("auth/register", async (newUser, thunkApi) => {
  console.log(newUser)
  try {
    const response = await axios.post('/users/signup', newUser)
 
  return response.data
  } catch (error) {
    console.error('Error response:', error.response);
   return thunkApi.rejectWithValue(error.message)
  }
})

export const login = createAsyncThunk("auth/login", async (userData, thunkApi) => {
 try {
   const response = await axios.post('/users/login', userData)
   setAuthHeader(response.data.token)
  return response.data
  } catch (error) {
   return thunkApi.rejectWithValue(error.message)
  }
})

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
try {
   const response = await axios.post('/users/logout')
   clearAuthHeader()
  return response.data
  } catch (error) {
   return thunkApi.rejectWithValue(error.message)
  }
})

export const refreshUser = createAsyncThunk("auth/refresh", async(_, thunkApi) => {
  const reduxState = thunkApi.getState() 
  setAuthHeader(reduxState.auth.token)
  const response = await axios.get('/users/current')
  return response.data
},
  {
    condition(_, thunkApi) {
      const reduxState = thunkApi.getState();
      return reduxState.auth.token !== null
  }}
)