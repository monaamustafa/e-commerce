import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./style/register.css";
import { auth } from "../../database/auth-config";

import { signInWithEmailAndPassword } from "firebase/auth";
import LocationPanner from "../pagelayout/LocationPanner";

export default function Login() {
  
  const Navigate=useNavigate()
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <LocationPanner  />
      <div className="container">
      <div className="d-flex justify-content-center">
        <div className="formItem">
          <Form>
            <h6>Login Your Account</h6>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Email <span>*</span>
              </Form.Label>
              <Form.Control type="email" placeholder="Enter email"  onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Password <span>*</span>
              </Form.Label>
              <Form.Control type="password" placeholder="Password"  onChange={(event) => {
                  setLoginPassword(event.target.value);
                }}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className="MColor" onClick={login}>
            SIGN IN
            </Button>
          </Form>
        </div>
        <div className="formItem">
          <h4>Don't Have An Account? Register Now !</h4>
          <Link to={'/register'}            
            className="btn MColor"
            >
            REGISTER NOW!
          </Link>
        </div>
      </div>
    </div>
  
    </>
  );
}
