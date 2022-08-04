import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import '../pages/Login.css'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(username == "" || password == ""){
      alert("Incomplete Data")
    }

    let res = await axios
      .post("http://localhost:9000/login", { username, password })
      .catch((error) => {
        
      });

    if (res) {
      console.log(res);
      if (res.data.role === "admin") {
        Navigate(`/admindashboard/${username}`);
      } else if (res.data.role === "staff") {
        Navigate(`/staffdashboard/${username}`);
      }
    }
  };

  return (
    <div>  
    <div class="container">
    <div class="screen">
      <div class="screen__content">
        <form class="login" onSubmit={handleSubmit}>
          <div class="login__field">
            <i class="login__icon fas fa-user"></i>
            <input type="text" class="login__input" placeholder="User name"  value={username}
                onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div class="login__field">
            <i class="login__icon fas fa-lock"></i>
            <input type="password" class="login__input" placeholder="Password" value={password}
                onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button class="button login__submit" type="submit">
            <span class="button__text">Log In Now</span>
            <i class="button__icon fas fa-chevron-right"></i>
          </button>				
        </form>
      </div>
      <div class="screen__background">
        <span class="screen__background__shape screen__background__shape4"></span>
        <span class="screen__background__shape screen__background__shape3"></span>		
        <span class="screen__background__shape screen__background__shape2"></span>
        <span class="screen__background__shape screen__background__shape1"></span>
      </div>		
    </div>
  </div>
  </div>
  );
};

export default Login;
