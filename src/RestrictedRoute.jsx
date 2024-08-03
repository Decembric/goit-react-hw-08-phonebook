import { useSelector } from "react-redux"
import { selectLoggedIn } from "./redux/auth/selectors"
import { Navigate } from "react-router-dom"

const RestrictedRoute = ({component}) => {
  const isLoggedIn = useSelector(selectLoggedIn)
  return isLoggedIn ? <Navigate to="/contacts"/> : component
  
}

export default RestrictedRoute