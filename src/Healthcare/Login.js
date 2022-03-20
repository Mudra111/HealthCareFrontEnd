import React, { useState } from "react";
import Axios from "axios";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export const LoginPage = () => {
  const [userFname, setUserFname] = useState("");
  const [userLname, setUserLname] = useState("");
  const [userMono, setUserMono] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userAdd, setUserAdd] = useState("");
  const [userBirth, setUserBirth] = useState("");
  const [userBldGrp, setUserBldGrp] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userConPass, setUserConPass] = useState("");
  const register = () => {
    Axios.post("http://localhost:3001/login", {
      FirstName: userFname,
      LastName: userLname,
      MobileNo: userMono,
      Email: userEmail,
      Gender: userGender,
      Address: userAdd,
      BirthDate: userBirth,
      BldGrp: userBldGrp,
      Password: userPass,
      ConPass: userConPass,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <Container className="mb-5">
        <h1 className="shadow-sm text-primary mt-5 p-3 text-center rounded">
          Admin Login
        </h1>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Jahnavi"
                  onChange={(e) => {
                    setUserFname(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Patel"
                  onChange={(e) => {
                    setUserLname(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="********"
                  onChange={(e) => {
                    setUserMono(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="xyz@xyz.com"
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    setUserGender(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="@yourlocation"
                  onChange={(e) => {
                    setUserAdd(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Birth Date</Form.Label>
                <Form.Control
                  type="Date"
                  placeholder=""
                  onChange={(e) => {
                    setUserBirth(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Blood Group</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="select"
                  onChange={(e) => {
                    setUserBldGrp(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setUserPass(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Conform Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setUserConPass(e.target.value);
                  }}
                />
              </Form.Group>

              <Button
                variant="primary btn-block mt-3"
                type="submit"
                onClick={register}
              >
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
