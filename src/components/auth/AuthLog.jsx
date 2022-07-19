import React, { useState } from "react";
import { auth } from "../../database/auth-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { Dropdown } from "react-bootstrap";

export default function AuthLog() {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });
  const signout = async () => {
    await signOut(auth);
  };
  return (
    <>
     {user ? (
            <section id="dropnav">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <FiUser />
                  {user.email}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={signout}>sign Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </section>
          ) : (
            <section id="dropnav">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <FiUser />
                  My Account
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Link to={"/login"} className="accountLog">
                    login
                  </Link>
                  <Link to={"/Register"} className="accountLog">
                    Register
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </section>
          )}
    </>
  );
}
