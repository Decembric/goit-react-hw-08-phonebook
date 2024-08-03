import { useDispatch, useSelector } from "react-redux"
import css from "./UserMenu.module.css"
import { selectUser } from "../../redux/auth/selectors"
import { logout } from "../../redux/auth/operations"

const UserMenu = () => {
  const dispatch = useDispatch()
  const userName = useSelector(selectUser)
  return (
    <div className={css.nav}>
      <div >Hello, {userName.name}</div>
    <button type="button" onClick={() => dispatch(logout())}>LOGOUT</button>
    </div>
    
  )
}

export default UserMenu