import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignupPage/SignupPage";

import userService from "./utils/userService";
function App() {
  const [user, SetUser] = useState(userService.getUser());

  function handleSignupOrLogin() {
    SetUser(userService.getUser());
  }
  return (
    <Routes>
    <Route path="/" element={<h1>Home Pageeeeeeeeeee</h1>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="signup"
        element={<SignUpPage handleSignupOrLogin={handleSignupOrLogin} />}
      /> 
  </Routes>
  );
}

export default App;
