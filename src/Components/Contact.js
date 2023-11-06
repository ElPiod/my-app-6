import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import imgPers from "../assets/img/personne.png"


const Contact = () => {
    return (
        <div className='contact'>
            <Container>
                <h1 className='text-center my-5'>Restons en Contact</h1>
                <Row className='reverse'>
                    <Col md={6} xs={12}>
                        <input type='text' className='input' placeholder='Prenom'/><br/>
                        <input type='text' className='input' placeholder='Nom'/><br/>
                        <textarea cols="30" rows="10" className='textArea' placeholder=' Message'></textarea>
                        <button className='float-end text-white px-2' style={{background: "orange", border: "none"}}>Envoyer</button>
                    </Col>
                    <Col md={6} xs={12} className='bg-light my-4'>
                        <img src={imgPers} alt="Persoone" className='img-fluid'/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;