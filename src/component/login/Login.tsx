import React from "react";
import "./Login.scss";
import { Form, Button, InputGroup } from "react-bootstrap";

function Login() {
  return (
    <>
      <div className="Login-page">
        <Form>
          <h3>Welcome</h3>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Login</Form.Label>
            <InputGroup className="inputdesign">
              <Form.Control type="text" placeholder="Enter you Login Id here" />
              <Button variant="outline-secondary" id="button-addon2">
                <img src="" alt="icon" />
              </Button>
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Enter your password</Form.Label>
            <InputGroup className="inputdesign">
              <Form.Control type="Password" placeholder="Enter your password" />
              <Button variant="outline-secondary" id="button-addon2">
                <img src="" alt="icon" />
              </Button>
            </InputGroup>
          </Form.Group>
          <Button>Log in</Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
