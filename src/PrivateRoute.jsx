import { useSelector } from "react-redux"
import { selectLoggedIn } from "./redux/auth/selectors"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({ component }) => {
  const isLoggedIn = useSelector(selectLoggedIn)
  return isLoggedIn ? component : <Navigate to="/login"/>
  
}

export default PrivateRoute