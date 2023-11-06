import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg">
                <Container maxWidth="xs">
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <div>
                            <Nav.Link href="#acceuil" className='text-white'>ACCEUIL</Nav.Link>
                            <div className='borde'></div>
                        </div>
                        <div>
                            <Nav.Link href="#presentation" className='text-white pres-hvr'>PRESENTATION</Nav.Link>
                            <div className='borde_1'></div>
                        </div>
                        <div>
                            <Nav.Link href="#porfolio" className='text-white por-hvr'>PORFOLIO</Nav.Link>
                            <div className='borde_2'></div>
                        </div>
                        <div>
                            <Nav.Link href="#competences" className='text-white comp-hvr'>COMPETENCES</Nav.Link>
                            <div className='borde_1'></div>
                        </div>
                        <div>
                            <Nav.Link href="#experiences" className='text-white exp-hvr'>EXPERIENCES</Nav.Link>
                            <div className='borde_3'></div>
                        </div>  
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default NavBar;