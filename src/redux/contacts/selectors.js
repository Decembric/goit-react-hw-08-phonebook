import { createSelector } from "@reduxjs/toolkit"
import { selectFilters } from "../filters/selectors";

export const selectError = state => state.contacts.error;
export const selectLoading = state => state.contacts.loading;
export const selectContacts = state => state.contacts.items;


export const selectFilterContacts = createSelector([selectContacts, selectFilters], (contacts, filterNames) => {
console.log(contacts)
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterNames.toLowerCase())
  )
})

