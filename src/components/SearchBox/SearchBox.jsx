import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css"
import { selectFilters } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";




const SearchBox = () => {
  const dispatch = useDispatch();
  const nameContact = useSelector(selectFilters);
  const handleFiltersContacts = event => dispatch(changeFilter(event.target.value));


  return (
    <>
      <label className={css.userName}>Find contacts by name</label>
      <input className={css.inputName}
        type="text"
        value={nameContact}
        onChange={handleFiltersContacts}
      />
    </>
  );
};

export default SearchBox;