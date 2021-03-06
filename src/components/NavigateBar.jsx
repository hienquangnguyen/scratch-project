import React, {Fragment} from 'react';
import {
  Navbar,
  Nav /* Form, FormControl, Button, Container */,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigateBar = ({authStatus}) => {

  const loggedIn = (
    <Fragment>
      <Nav.Link style={{ color: "white" }} href="/login">
        Login
      </Nav.Link>

      <Nav.Link style={{ color: "white" }} href="/signup">
        Signup
      </Nav.Link>
    </Fragment>
  );

  const loggedOut = (
    <Fragment>
      <Nav.Link style={{ color: "white" }} href="/login">
        Logout
      </Nav.Link>
    </Fragment>
  );
  return (
    <Navbar bg="primary" variant="dark">
      {/* Leftside Nav Logo/Link */}
      {/* TODO: Point this href to `/explore` if User is authenticated */}
      <Link to="/">
        <Navbar.Brand>Scratch Project</Navbar.Brand>
      </Link>
      {/* Rightside Nav Links */}
      {/* Set class for Login and Signup button Nav item to `margin-left: auto;`*/}
      <Nav className="ml-auto">
        {/* TODO: Remove inline styling in favor of Bootstrap or separate stylesheet */}

        {/* temporary link to render submit idea page */}
        <Link to="/submit">
          <Nav.Link style={{ color: 'white' }} href="/submit">
            Submit Idea
          </Nav.Link>
        </Link>
        {authStatus ? loggedIn : loggedOut}
      </Nav>
    </Navbar>
  );

  // // Search Bar Component
  // < Form inline >
  //   <FormControl type="text" placeholder="Search" className="mr-sm-2" />
  //   <Button variant="outline-light">Search</Button>
  // </Form >
};

export default NavigateBar;
