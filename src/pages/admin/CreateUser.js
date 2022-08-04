import axios from "axios";
import React, { useEffect ,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../../components/admin/Navbar";
import '../admin/CreateUser.css'

const CreateUser = () => {
  const Navigate = useNavigate();
  const currentUser = useParams().username;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      firstName === "" ||
      lastName === "" ||
      username === "" ||
      password === "" ||
      role === ""
    ) {
      alert("Please Fill incomplete Data");
      return;
    }

    let resp = await axios
      .post("http://localhost:9000/createuser", {
        firstName,
        lastName,
        username,
        password,
        role,
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data, { autoClose: 1000 });
        return;
      });

    if (resp) {
      console.log(resp);
      alert("User Created")
      return;
    }
  };

  const checkoutUser = async () => {
    let resp = await axios
      .get(`http://localhost:9000/checkoutuser/?username=${currentUser}`)
      .catch((error) => {
        console.log(error);
        Navigate("/");
        return;
      });

    if (resp) {
      console.log(resp);
      console.log("User is checked out");
      return;
    }
  };
  useEffect(() => {
    checkoutUser();
  }, []);
  return (
    <div>
      <Navbar />
      <div class="container">
    <div class="screen">
      <div class="screen__content">
        <form class="create" onSubmit={handleSubmit}>
        <div class="login__field">
            <i class="login__icon fas fa-user"></i>
            <input type="text" class="login__input" placeholder="First name"  value={firstName}
                onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div class="login__field">
            <i class="login__icon fas fa-user"></i>
            <input type="text" class="login__input" placeholder="Last Name"  value={lastName}
                onChange={(e) => setLastName(e.target.value)}/>
          </div>
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
          <div class="login__field">
            <i class="login__icon fas fa-user"></i>
            <input type="text" class="login__input" placeholder="Role"  value={role}
                onChange={(e) => setRole(e.target.value)}/>
          </div>
          <button class="button login__submit" type="submit">
            <span class="button__text">Submit</span>
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

export default CreateUser;
