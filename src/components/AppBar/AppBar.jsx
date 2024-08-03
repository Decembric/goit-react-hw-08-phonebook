import { useSelector } from "react-redux"
import AuthNav from "../AuthNav/AuthNav"
import Navigation from "../Navigation/Navigation"
import UserMenu from "../UserMenu/UserMenu"
import css from "./AppBar.module.css"
import { selectLoggedIn } from "../../redux/auth/selectors"

const AppBar = () => {
  const isLoggedIn = useSelector(selectLoggedIn)
  return (
    <header className={css.navLink}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  )
}

export default AppBar