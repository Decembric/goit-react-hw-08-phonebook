import {createSlice } from "@reduxjs/toolkit";
import { fetchAddContact, fetchContacts, fetchRemoveContact } from "./operations";
import { logout } from "../auth/operations";

export const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: false
  },
  filters: {
    name: "",
  }, 
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE.contacts,
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, state => {
      state.error = false
      state.loading = true
    }).addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    }).addCase(fetchContacts.rejected, state => {
      state.loading = false;
      state.error = true;
    }).addCase(fetchAddContact.pending, state => {
      state.error = false
      state.loading = true
    }).addCase(fetchAddContact.fulfilled, (state, action) => {
      state.loading = false
      state.items.push(action.payload)
    }).addCase(fetchAddContact.rejected, state => {
      state.loading = false;
      state.error = true;
    }).addCase(fetchRemoveContact.pending, state => {
      state.error = false
      state.loading = true
    }).addCase(fetchRemoveContact.fulfilled, (state, action) => {
      console.log(action)
      state.loading = false
      const contactIndex = state.items.findIndex(contact => contact.id === action.payload.id);
      state.items.splice(contactIndex, 1);
    }).addCase(fetchRemoveContact.rejected, (state) => {
      state.loading = false;
      state.error = true;
    }).addCase(logout.fulfilled, state => {
      state.loading = false
      state.error = false
    })
  }
});



export const {addContact, deleteContact, } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;