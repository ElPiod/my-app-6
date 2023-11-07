import React from 'react';
import NavBar from './NavBar';
import { Col, Container, Row } from 'react-bootstrap';
import imgPers from "../assets/img/personne.png"
import { Phone, Envelope, GeoAltFill, HouseFill } from 'react-bootstrap-icons';
import imgVector from '../assets/img/Vector 1.png'
import imgVector2 from '../assets/img/Vector 2.png'


const Header = () => {
    return (
        <>
        <div className='header_wrapper' id='acceuil'>
            <div className='navbar_header'>
                <NavBar/>
            </div>
            <div className='container_header header-borde'>
               <Container maxWidth="sm">
                    <Row>
                        <Col md={6} xs={12} className='d-flex flex-column'>
                            <h3 className='text-header'>Hello ! je suis <span className='nom'>HOUSSEYNOU KENDE</span> <br/>
                            Développeur backend senior à Volkeno</h3>
                            <div className='contact-me d-flex justify-content-evenly'>
                                <li><Phone className='icon-org'/> 76 605 84 14</li>
                                <li><Envelope className='icon-org'/> hkend@gmail.com</li>
                                <li><GeoAltFill className='icon-org'/> Liberte 6 Dakar </li>
                                <li><HouseFill className='icon-org'/> Volkeno</li>
                            </div>
                        </Col>
                        <Col md={6} xs={12} className='text-center'>
                            <img src={imgPers} alt="Persoone" className='img-fluid'/>
                        </Col>
                    </Row>
               </Container>
            </div>
            <div>
                <img src={imgVector} alt="Wave" className='img-fluid waveImg'/>
                <img src={imgVector2} alt="Wave" className='img-fluid waveImg2'/>
            </div>
        </div>
    </>
    );
};

export default Header;