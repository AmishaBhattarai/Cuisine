//  css import
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
// package import
import ReactGA from "react-ga4";
import { useSelector } from "react-redux";
import React, {
  Suspense,
  lazy,
  useEffect,
  useState,
} from "react";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// local import
import { Loading } from "./components";
import Profile from "./pages/profile";
import Contact from "./pages/contactUs";
import BusinessSign from "./pages/businessSign";
import ScrollToTop from "./helpers/scrollToTop";
const Login = lazy(() => import("./pages/login"));
const Register = lazy(
  () => import("./pages/register")
);
import {
  MainWrapper,
  ProfileWrapper,
} from "./wrapper";
import {
  Business,
  CartItems,
  Delivery,
  DeliveryForm,
  FAQ,
  Home,
  Menu,
  NotFound,
  Restaurants,
} from "./pages";
import ProtectedUserRoute from "./functions/protectedRoutes";
// import { useGetUserQuery } from "./app/slice/userSlice";
// import { setCredentials } from "./app/slice/authSlice";
import Preference from "./pages/preference";
import ThreeDimView from "./pages/3dview";
import Settings from "./pages/settings";
import ForgotPass from "./pages/forgotPass";
import ResetPass from "./pages/resetPass";
import Loyality from "./pages/loyality";

function App() {
  const user = useSelector(
    (state) => state.authReducer.token
  );

  // const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (user) {
      setActive(true);
    }
  }, [user]);

  ReactGA.initialize(
    process.env.REACT_APP_GOOGLE_ANALYTICS_ID1
  );
  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "Main Page",
  });
  // const { data, refetch } = useGetUserQuery();
  // useEffect(() => {
  //   if (!data) {
  //     fetchData();
  //   }
  //   if (data) {
  //     dispatch(
  //       setCredentials({
  //         user: data.username,
  //         role: data.role,
  //         phone: data.phoneNumber,
  //         lat: data.latitude,
  //         lon: data.longitude,
  //         id: data.id,
  //         email: data.email,
  //         token: user,
  //       })
  //     );
  //   }
  // }, [data]);
  // const fetchData = async () => {
  //   try {
  //     await refetch();
  //   } catch (error) {
  //     console.error(
  //       "Error fetching user data:",
  //       error
  //     );
  //   }
  // };
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* auth routes */}
          <Route
            path="/api/auth/reset-password"
            element={<ResetPass />}
          />
          <Route
            path="/cuisine/compass/login"
            element={
              !active ? (
                <Suspense fallback={<Loading />}>
                  <Login />
                </Suspense>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/cuisine/compass/register"
            element={
              !active ? (
                <Suspense fallback={<Loading />}>
                  <Register />
                </Suspense>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/cuisine/compass/forgot/password"
            element={
              !active ? (
                <Suspense fallback={<Loading />}>
                  <ForgotPass />
                </Suspense>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          {/* Main Routes */}
          <Route
            element={<MainWrapper user={user} />}
          >
            <Route path="/" element={<Home />} />

            <Route
              path="/cuisine/compass/view/threedim"
              element={<ThreeDimView />}
            />
            <Route
              path="/cuisine/compass/restaurants"
              element={<Restaurants />}
            />
            <Route
              path="/cuisine/compass/contact"
              element={<Contact />}
            />
            <Route
              path="/cuisine/compass/faq"
              element={<FAQ />}
            />
            <Route
              path="/cuisine/compass/delivery"
              element={<Delivery />}
            />
            <Route
              path="/cuisine/compass/loyality"
              element={<Loyality />}
            />
            <Route
              path="/cuisine/compass/delivery/form"
              element={<DeliveryForm />}
            />
            <Route
              path="/cuisine/compass/restaurants/menu/:name/:location"
              element={<Menu />}
            />
            <Route
              path="/cuisine/compass/business"
              element={<Business />}
            />
            <Route
              path="/cuisine/compass/mybusiness/signup/:id"
              element={<BusinessSign />}
            />
            <Route
              path="/cuisine/compass/restaurants/menu/showcart"
              element={<CartItems />}
            />
            <Route
              element={<ProtectedUserRoute />}
            >
              <Route element={<ProfileWrapper />}>
                <Route
                  path="/cuisine/compass/restaurants/profile/account"
                  element={<Profile />}
                />
                <Route
                  path="/cuisine/compass/preferences"
                  element={<Preference />}
                />
                <Route
                  path="/cuisine/compass/settings"
                  element={<Settings />}
                />
              </Route>
            </Route>
          </Route>
          {/* not found route */}
          <Route
            path="*"
            element={
              <Suspense fallback={<Loading />}>
                <NotFound />
              </Suspense>
            }
          />
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
