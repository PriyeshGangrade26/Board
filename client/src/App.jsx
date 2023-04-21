import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Login } from "./components/Login";
import "./css/global.css";
import { Dashboard } from "./components/Dashboard";
import { About } from "./components/About";
import { PageNotFound } from "./components/PageNotFound";
import { Transaction } from "./components/NavPage/Transaction";
import { Schedules } from "./components/NavPage/Schedules";
import { Users } from "./components/NavPage/Users";
import { Settings } from "./components/NavPage/Settings";
import { Help } from "./components/NavPage/Help";
import { ContactUs } from "./components/NavPage/ContactUs";
import { useAuth0 } from "@auth0/auth0-react";
import { LoadingSpinner } from "./components/LoadingSpinner";

const App = () => {
  const [localAuthenticated, setLocalAuthenticated] = useState(true);
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <LoadingSpinner />;
  }
  const CheckLocalAuthentication = () => {
    setLocalAuthenticated(true);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Login CheckLocalAuthentication={CheckLocalAuthentication} />
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuthenticated || localAuthenticated ? (
              <Dashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/transaction"
          element={
            isAuthenticated || localAuthenticated ? (
              <Transaction />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/schedule"
          element={
            isAuthenticated || localAuthenticated ? (
              <Schedules />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/user"
          element={
            isAuthenticated || localAuthenticated ? (
              <Users />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/setting"
          element={
            isAuthenticated || localAuthenticated ? (
              <Settings />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/about"
          element={
            isAuthenticated || localAuthenticated ? (
              <About />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/help"
          element={
            isAuthenticated || localAuthenticated ? (
              <Help />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/contactus"
          element={
            isAuthenticated || localAuthenticated ? (
              <ContactUs />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/anything"
          element={<PageNotFound />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </>
  );
};

const MainApp = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export { MainApp };
