
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavItem } from "react-bootstrap";
import { signInWithPopup, signOut } from "firebase/auth";
import { provider } from "../firebase";
import ClubData from "./ClubData";
import Dropdown from 'react-bootstrap/Dropdown';


export function Header(props:{ auth: any, user: any }){

    return(
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">部活統括サイト</Navbar.Brand>
          <NavItem className="NavSign">
            <NavItem
                onClick={() => {
                    if (props.user) {
                        signOut(props.auth);
                    } else {
                        signInWithPopup(props.auth, provider);
                    }
                }}
                className="NavName"
                >
                {props.user ? 
                    <span>
                        <img
                            src={props.user.photoURL}
                            alt={props.user.displayName}
                            width="30"
                            height="30"
                            className="rounded-circle me-2"
                            referrerPolicy="no-referrer"
                        />
                        {props.user.displayName}
                    </span>
                    : 
                    "Sign up"
                }
            </NavItem>
            <NavItem>
                {props.user ?
                <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic"></Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item><ClubData name={props.user.displayName}/></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> 
                : ""
                }
            </NavItem>
          </NavItem>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <a href="" className="button01">入部届</a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}