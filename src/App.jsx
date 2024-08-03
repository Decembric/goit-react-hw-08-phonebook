

import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";


import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";
import Loader from "./components/Loader/Loader";


const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'))
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'))
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'))




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
      <Suspense fallback={<Loader/>}>
      <Layout>
      <Routes>
        <Route path="/" element={<HomePage/>} />
          <Route path="/register" element={<RestrictedRoute component={<RegistrationPage/> } />} />
          <Route path="/login" element={<RestrictedRoute component={<LoginPage />} />} />
          <Route path="/contacts" element={<PrivateRoute component={<ContactsPage/> } /> } />
      </Routes>
      </Layout>
      </Suspense>
    </div>
  );
}

export default App


