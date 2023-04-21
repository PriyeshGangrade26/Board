import React from "react";
import ReactDOM from "react-dom/client";
import { MainApp } from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-s6ep4h08hrh0nnkb.us.auth0.com"
    clientId="WcsxIxAPtlbr0dCOmzE0VNIKEli1IEoL"
    authorizationParams={{
      redirect_uri: "https://board-fle7.onrender.com/",
    }}>
    <MainApp />
  </Auth0Provider>
);
