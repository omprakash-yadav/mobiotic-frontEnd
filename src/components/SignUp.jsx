import React, { Fragment, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  let navigate = useNavigate();
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [password, setPassword] = useState("");
  let [conformPassword, setConformPassword] = useState("");
  let [image ,setImage]=useState("")
  let [passwordMatch, setMatch] = useState("");
  

  //comparing the password
  useEffect(() => {
    if (password === conformPassword) {
      setMatch(false);
    } else {
      setMatch(true);
    }
  });

  //creating the data and submit on database
  let baseUrl = "http://localhost:4000/users";
  let handleSubmit = async () => {
    let res = await axios.post(`${baseUrl}/signup`, {
      firstName,
      lastName,
      email,
      mobile,
      password,
      image
    });
    console.log(res);
    if (res.data.statusCode === 200) {
      navigate("/login");
    }
  };

  return (
    <Fragment>
      <div className="wrapper">
        <h2 className="header"> SignUp It's Free</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>First Name </Form.Label>
            <Form.Control
              type="text"
              placeholder=" Enter First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name </Form.Label>
            <Form.Control
              type="text"
              placeholder=" Enter Last Name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Mobile Number"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your mobile number with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Conform Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Conform Password"
              onChange={(e) => {
                setConformPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control 
             type="file" id="img" name="img" accept="image/*"
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
          </Form.Group>
          <div className="buttn">
            <Button
              variant="primary"
              onClick={() => {
                handleSubmit();
              }}
            >
              Submit
            </Button>
            {passwordMatch ? (
              <div style={{ color: "red" }}>password should match!</div>
            ) : (
              <></>
            )}
          </div>
        </Form>
      </div>
    </Fragment>
  );
}

export default Signup;
