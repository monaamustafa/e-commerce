import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./style/register.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../database/auth-config";
import { useNavigate } from "react-router-dom";
import LocationPanner from "../pagelayout/LocationPanner";
export default function Register() {
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      user.displayName=registerName
      console.log(user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <LocationPanner />
      <div className="container">
        <Form className="d-flex justify-content-center">
          <div className="formItem">
            <h6>Personal Information</h6>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>
                First Name <span>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={(event) => {
                  setRegisterName(event.target.value);
                }}
              />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Last Name <span>*</span>
              </Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group> */}
          </div>
          <div className="formItem">
            <h6>Sign-In Information</h6>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>
                Email <span>*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Password <span>*</span>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(event) => {
                  setRegisterPassword(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className="MColor" onClick={register}>
              Create an Account
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
