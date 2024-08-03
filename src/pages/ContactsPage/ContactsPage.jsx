import { useSelector } from "react-redux"

import ContactForm from "../../components/ContactForm/ContactForm"
import SearchBox from "../../components/SearchBox/SearchBox"
import Loader from "../../components/Loader/Loader"
import Error from "../../components/Error/Error"
import ContactList from "../../components/ContactList/ContactList"
import { selectError, selectLoading } from "../../redux/contacts/selectors"


const ContactsPage = () => {
    const isLoading = useSelector(selectLoading)
  const isError = useSelector(selectError)
  return (
    <> <ContactForm  />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <Error />}
      <ContactList /></>
      
    
  )
}

export default ContactsPage