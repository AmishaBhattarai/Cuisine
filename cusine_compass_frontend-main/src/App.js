import React, { Suspense, lazy } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Loading from "./components/loader";
import NotFound from "./pages/notFound";
import Home from "./pages/home";
import MainWrapper from "./wrapper/main";
const Login = lazy(() => import("./pages/login"));
const Register = lazy(
  () => import("./pages/register")
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainWrapper />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route
            path="/cuisine/compass/login"
            element={
              <Suspense fallback={<Loading />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/cuisine/compass/register"
            element={
              <Suspense fallback={<Loading />}>
                <Register />
              </Suspense>
            }
          />
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
    </div>
  );
}

export default App;

