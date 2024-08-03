

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import Layout from "./components/Layout/Layout";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";





const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
  if (isRefreshing) {
    return null
  }
  return (
    <div>
      <Layout>
      <Routes>
        <Route path="/" element={<HomePage/>} />
          <Route path="/register" element={<RestrictedRoute component={<RegistrationPage/> } />} />
          <Route path="/login" element={<RestrictedRoute component={<LoginPage />} />} />
          <Route path="/contacts" element={<PrivateRoute component={<ContactsPage/> } /> } />
      </Routes>
      </Layout>
    </div>
  );
}

export default App


