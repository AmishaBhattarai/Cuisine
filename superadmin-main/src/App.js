import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Menu from "./pages/menu";
import Order from "./pages/order";
import Login from "./pages/login";
import Profile from "./pages/profile";
import { SideBar } from "./components";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import ForgotPass from "./pages/forgotpass";
import Settings from "./pages/settings";
import Dashboard from "./components/dashboard";
import Reservations from "./pages/reservation";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import ReservationSettings from "./pages/reservationSettings";
import CreateMenu from "./pages/menuActions";
import ProtectedUserRoute from "./function/protectedRoutes";
import Cuisine from "./pages/cuisine";

function App() {
  const user = useSelector(
    (state) => state.authReducer.token
  );

  const [active, setActive] = useState(false);

  useEffect(() => {
    if (user) {
      setActive(true);
    }
  }, [user]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              !active ? (
                <Login />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          <Route
            path="/forgotpassword"
            element={
              !active ? (
                <ForgotPass />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route element={<ProtectedUserRoute />}>
            <Route
              element={<SideBar user={user} />}
            >
              <Route
                path="/"
                element={<Dashboard />}
              />
              <Route
                path="/menu"
                element={<Menu />}
              />
              <Route
                path="/menu/create"
                element={<CreateMenu />}
              />
              <Route
                path="/reservations"
                element={<Reservations />}
              />
              <Route
                path="/reservations/settings"
                element={<ReservationSettings />}
              />
              <Route
                path="/orders"
                element={<Order />}
              />
              <Route
                path="/cuisine"
                element={<Cuisine />}
              />
              <Route
                path="/settings"
                element={<Settings />}
              />
              <Route
                path="/profile"
                element={<Profile />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={150}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;

