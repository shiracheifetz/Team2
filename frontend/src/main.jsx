import "./amplify-config.js"; // <-- Make this the absolute first line in both files!
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "us-east-1_09qgNGF6c",
      userPoolClientId: "64v5hjuq65698ukkl0iidjrlbo",
      loginWith: {
        email: true,
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
