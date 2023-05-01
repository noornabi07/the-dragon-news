import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mb-3'>
            <Container>
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="/" className='px-2'>Home</Link>
                        {/* <Nav.Link href="#pricing">About</Nav.Link> */}
                        <Link to="/about" className='px-2'>About</Link>
                        <Link to="/career" className='px-2'>Career</Link>
                        {/* <Nav.Link href="#pricing">Career</Nav.Link> */}
                    </Nav>
                    <Nav>
                        {user &&
                            <FaUserCircle style={{ fontSize: '2rem', marginRight: "8px", marginTop: "4px" }}></FaUserCircle>
                        }

                        {user ?
                            <Button onClick={handleLogOut} variant="secondary">LogOut</Button> :

                            <Link to="/login"><Button variant="secondary">Login</Button></Link>

                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;