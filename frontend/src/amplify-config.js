import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "us-east-1_09qgNGF6c", // Keep your real pool ID here [cite: 203]
      userPoolClientId: "64v5hjuq65698ukkl0iidjrlbo", // Keep your real client ID here [cite: 204]
      loginWith: {
        email: true, // [cite: 206]
      },
    },
  },
});

console.log("Amplify is initialized!");
