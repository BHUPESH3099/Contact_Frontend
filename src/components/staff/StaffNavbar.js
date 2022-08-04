import axios from "axios";
import React from "react";
import { FcCallback } from "react-icons/fc";
import { useNavigate, Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BiExit } from "react-icons/bi";
import '../staff/StaffNavbar.css'

const StaffNavbar = () => {
  const Navigate = useNavigate();
  const currentUser = useParams().username;

  const logoutUser = async () => {
    let resp = await axios
      .get("http://localhost:9000/logout")
      .catch((error) => {
        console.log(error);
      });

    if (resp) {
      console.log(resp);
      Navigate("/");
      alert("User Logged Out Successful")
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={`/staffdashboard/${currentUser}`}>
            <span className="n-name">
              CONTACTS 
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="text-center fw-bold text-secondary">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Contacts
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/createcontact/${currentUser}`}
                      >
                        Create Contact
                      </Link>
                    </li>
                    <hr className="dropdown-divider" />
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/displaycontact/${currentUser}`}
                      >
                        Display Contact
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Contacts Detail
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/createcontactdetail/${currentUser}`}
                      >
                        Create Contact Detail
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={`/retreivecontact/${currentUser}`}
                  >
                    Retreive
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <button className="button" onClick={logoutUser}>
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default StaffNavbar;
