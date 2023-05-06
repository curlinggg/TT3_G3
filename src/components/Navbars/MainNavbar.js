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
import { Link } from "react-router-dom";
// reactstrap components
import {
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

const MainNavbar = (props) => {
  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {props.brandText}
          </Link>
          
          <Nav className="align-items-center d-none d-md-flex" navbar>
          <NavItem>
                <NavLink className="nav-link-icon" to="/auth/login" tag={Link}>
                <i className="ni ni-single-02" />
                  <span className="nav-link-inner--text">Welcome, Employee Name</span>
                </NavLink>
              </NavItem>
          <NavItem>
                <NavLink
                  className="nav-link-icon"
                  to="/auth/login"
                  tag={Link}
                > 
                  <span className="nav-link-inner--text">Log Out</span>
                </NavLink>
              </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;
