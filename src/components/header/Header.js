import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    // Navigation bar at the top of the application
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        {/* Branding with a film icon and title */}
        <Navbar.Brand href="/" style={{ "color": 'gold' }}>
          <FontAwesomeIcon icon={faFilm} /> GoldenFilmHub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* Navigation links */}
            <NavLink className="nav-link" to="/">Home</NavLink>
            {/* "Watch List" link is a future feature to be implemented */}
            <NavLink className="nav-link" to="/watchList">Watch List</NavLink>
          </Nav>
          {/* Buttons for future features (Login and Register) */}
          <Button variant="outline-info" className="me-2">Login</Button>
          <Button variant="outline-info" className="me-2">Register</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
