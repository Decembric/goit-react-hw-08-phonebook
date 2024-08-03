import clsx from "clsx";
import { NavLink } from "react-router-dom"
import css from "./AuthNav.module.css"

const AuthNav = () => {
  
  const getActiveLink = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });
  return (
    <div>
      <NavLink className={getActiveLink} to="/register">REGISTER</NavLink>
      <NavLink className={getActiveLink} to="/login">LOG IN</NavLink>
    </div>
      
  )
}

export default AuthNav