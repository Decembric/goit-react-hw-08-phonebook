import { NavLink } from "react-router-dom"
import css from "./Navigation.module.css"
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
const isLoggedIn = useSelector(selectLoggedIn)
  const getActiveLink = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

  return (
    <nav className={css.nav}>
      <NavLink className={getActiveLink} to="/">HOME</NavLink>
      {isLoggedIn && <NavLink className={getActiveLink} to="/contacts">CONTACTS</NavLink>}
      
<hr/>
    </nav>
  )
}

export default Navigation