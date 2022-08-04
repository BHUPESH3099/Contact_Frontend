import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import StaffNavbar from "../../components/staff/StaffNavbar";
import '../staff/CreateContact.css'

const CreateContact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const currentUser = useParams().username;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (firstName === "" || lastName === "") {
      toast.error("Please fill complete information", { autoClose: 1000 });
      return;
    }

    let resp = await axios
      .post("http://localhost:9000/createcontact", {
        username: currentUser,
        firstName,
        lastName,
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data, { autoClose: 1000 });
        return;
      });

    if (resp) {
      console.log(resp);
      alert("Created Successful")
      setFirstName("")
      setLastName("")
      return;
    }
  };

  return (
    <div>
      <StaffNavbar />
      <div class="container">
    <div class="screen">
      <div class="screen__content">
        <form class="login" onSubmit={handleSubmit}>
          <div class="login__field">
            <i class="login__icon fas fa-user"></i>
            <input type="text" class="login__input" placeholder="First Name"  value={firstName}
                onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div class="login__field">
            <i class="login__icon fas fa-lock"></i>
            <input type="text" class="login__input" placeholder="Last Name" value={lastName}
                onChange={(e) => setLastName(e.target.value)}/>
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

export default CreateContact;
