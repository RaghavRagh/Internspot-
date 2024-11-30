import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import { Suspense, useEffect } from "react";
import Subscription from "./pages/Subscription/Subscription";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./features/userSlice";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import Website from "./pages/Website";
import Layout from "./components/Layout/Layout";
import Internships from "./pages/Internships";
import MyApplications from "./pages/MyApplications/MyApplications";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userInfoFromStorage = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;

    if (userInfoFromStorage) {
      dispatch(loginSuccess(userInfoFromStorage));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Website />} />
            <Route path="/auth">
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="/user">
              <Route path="profile" element={<Profile />} />
              <Route path="applications" element={<MyApplications />} />
            </Route>
            <Route path="subscription" element={<Subscription />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/internships" element={<Internships />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
