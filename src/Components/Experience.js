import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Diagram2, Fire, JournalBookmarkFill, JournalRichtext } from 'react-bootstrap-icons';

const Experience = () => {
    return (
        <div className='experiences_wrapper'>
            <Container className='bg-light'>
                <h1 className='text-center'>MES EXPRIENES</h1>
                <Row>
                    <Col md={12} xs={12} className='bg-white fluid'>
                        <h3>Développeur Front-End en alternance ( RNCP niv 6 ),</h3>
                        <h6 style={{color: "orange"}}>Janvier 2021</h6>
                        <p>Pédagogie basée sur la réalisation de projets concrets
                           avec l'accompagnement d'un expert métier chaque semaine. 
                           L'alternancepeut débuter à tout moment dans l'année avec 
                           4 jours en entreprise et un jour de formation modulables dans lasemaine.</p>
                    </Col>
                    <Col md={12} xs={12} className='bg-white fluid my-3'>
                    <h3>CS50, Harvard</h3>
                        <h6 style={{color: "orange"}}>Aout-otocbre 2020</h6>
                        <p>Formation en ligne exclusivement dispensée en anglais. 
                            Les sujets comprennent l'abstraction, les algorithmes, 
                            les structures dedonnées, l'encapsulation, la gestion des ressources,
                            la sécurité, l'ingénierie logicielle et le développement Web. 
                            L'ensemble des problèmes est inspiré des domaines du monde réel 
                            de la biologie, de la cryptographie, de la finance et des jeux.</p>
                    </Col>
                    <Col md={12} xs={12} className='bg-white fluid my-3'>
                    <h3>Développeur junior, M2I formation</h3>
                        <h6 style={{color: "orange"}}>Mars-Juillet 2020</h6>
                        <p>Formation à raison de 35h/s à distance. Ce cursus comprend HTML, 
                            CSS, Bootstrap, Algorithmie, Javascript, React JS, Redux, LESS/SAAS, 
                            Git, Github enseigné par un expert toujours en activité. Cette formation 
                            m'a permis de valider ces enseignements par la pratique de plus d'une douzaine de projets.</p>
                    </Col>
                </Row>
            </Container>
            <div className='footer_exp d-flex'>
                <Col md={3} className='text-center fs-1 text-white'><JournalRichtext/><br/><p className='fs-5'>18 projets</p></Col>
                <Col md={3} className='text-center fs-1 text-white'><Diagram2/><br/><p className='fs-5'>30 algorythme</p></Col>
                <Col md={3} className='text-center fs-1 text-white'><JournalBookmarkFill/><br/><p className='fs-5'>10 console.log();</p></Col>
                <Col md={3} className='text-center fs-1 text-white'><Fire/><br/><p className='fs-5'>16 border:solid red lpx</p></Col>
            </div>
        </div>
    );
};

export default Experience;
