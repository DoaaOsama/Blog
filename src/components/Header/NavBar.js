import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={require('../../assets/images/logo.svg')}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {' React Blogger'}
            </Navbar.Brand>
            <Nav>
                <NavDropdown title="Users">
                    <NavDropdown.Item href="/users">Users</NavDropdown.Item>
                    <NavDropdown.Item href="/addUser">Add User</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Posts">
                    <NavDropdown.Item href="/posts">Posts</NavDropdown.Item>
                    <NavDropdown.Item href="/addPost">Add Post</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    )
}

export default NavBar;