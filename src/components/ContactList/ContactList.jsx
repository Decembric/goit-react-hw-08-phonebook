
import { useEffect } from "react";
import { selectFilterContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";



const ContactList = () => {
  const dispatch = useDispatch()
const filterContacts = useSelector(selectFilterContacts)
  useEffect(() => {
  dispatch(fetchContacts())
}, [dispatch])
 return (
    <ul className={css.nameList}>
      {Array.isArray(filterContacts) && 
      filterContacts.map((contact) => {
        return (
          <li className={css.nameItem} key={contact.id}>
            <Contact data={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;