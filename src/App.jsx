import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignupPage/SignupPage";

import userService from "./utils/userService";



function App() {
  const [user, setUser] = useState(userService.getUser());

  function handleSignupOrLogin() {
    setUser(userService.getUser());
  }
  if(user){
  return (
    <Routes>
    <Route path="/" element={<HomePage loggedUser={user}/>} />
      <Route path="/login" element={<LoginPage  handleSignupOrLogin={handleSignupOrLogin}/>} />
      <Route path="/signup"
        element={<SignUpPage handleSignupOrLogin={handleSignupOrLogin} />}
      /> 
  </Routes>
    );
  }
}

export default App;
