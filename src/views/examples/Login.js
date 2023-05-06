/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import { useState } from "react";
import {
  Button,
  Card,
  //   CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  //   Row,
  Col,
} from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";


const Login = () => {
  const [eid, setEid] = useState("");
  const [pwd, setPwd] = useState("");
  const history = useHistory();
  const authenticationTriggered = () => {
    // console.log(eid, pwd);
    axios
      .post("http://localhost:3000/auth/login", {
        emp_id: eid,
        password: pwd,
      })
      .then((response) => {
        console.log("success");
        // history.push('/admin/claims-dashboard');
      })
      .then((data) => { 
        console.log("success");
        history.push('/admin/claims-dashboard');
      })
      .catch((error) => { // error is handled in catch block
        alert("username or password is wrong")
        console.log(error)
      });
    //   .then((response) => {
    //     console.log("kube 51")
    //     console.log(response.status);
    //     if (response.status = "200") {
    //         history.push('/');
    //     }
    //   }
    //   .catch(
    //     alert("username or password is wrong")
    //   ));
      
  };
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <div>Sign in</div>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-circle-08" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="User ID"
                    type="email"
                    autoComplete="new-email"
                    value={eid}
                    onChange={(e) => setEid(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              {/* <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div> */}
              <div className="text-center">
                <Button
                  className="my-4"
                  color="primary"
                  type="button"
                  onClick={authenticationTriggered}
                >
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        {/* <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row> */}
      </Col>
    </>
  );
};

export default Login;
