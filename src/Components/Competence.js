import React from 'react';
import { Col, Container, Row, ProgressBar } from 'react-bootstrap';

const Competence = () => {
    return (
        <div className='competence_wrapper' id='competences'>
            <Container>
                <h1 className='text-center'>MES COMPETENCES</h1>
                    <Row>
                        <Col md={6} xs={12} className='colBar d-flex flex-column justify-content-center'>
                        <h3 className='text-center text-md-end bg-light' style={{ color: "#009688" }}>OUTILS</h3>
                            <div className='d-flex align-items-center gap-5 my-2'>
                                <ProgressBar now={100} variant="success" className='w-50 h-25'/>
                                <h5>BOOTSTRAP</h5>
                            </div>
                            <div className='d-flex align-items-center gap-5 my-2'>
                                <ProgressBar variant="success" className='w-50 h-25' now={70} />
                                <h5>LARAVAL</h5>
                            </div>
                            <div className='d-flex align-items-center gap-5 my-2'>
                                <ProgressBar variant="success" className='w-50 h-25' now={70} />
                                <h5>REACT</h5>
                            </div>
                            <div className='d-flex align-items-center gap-5 my-2'>
                                <ProgressBar variant="success" className='w-50 h-25' now={70} />
                                <h5>DIANGO</h5>
                            </div>
                        </Col>
                        <Col md={6} xs={12} className='colBar d-flex flex-column justify-content-center'>
                        <h3 className='text-md-start bg-light'style={{ color: "#009688" }}>LANGUAGE</h3>
                            <div className='d-flex align-items-center flex-md-reverse gap-4 my-2'>
                                <h5>HTML </h5>
                                <ProgressBar now={100} variant="success" className='w-50 h-25' style={{marginLeft: "37px"}}/>
                            </div>
                            <div className='d-flex align-items-center gap-5 my-2'>
                                <h5>CSS</h5>
                                <ProgressBar variant="success" className='w-50 h-25' now={73} style={{marginLeft: "34px"}} />
                            </div>
                            <div className='d-flex align-items-center gap-2 my-2'>
                                <h5>JAVASCRIPT</h5>
                                <ProgressBar variant="success" className='w-50 h-25' now={74} />
                            </div>
                            <div className='d-flex align-items-center gap-5 my-2'>
                                <h5>PHP</h5>
                                <ProgressBar variant="success" className='w-50 h-25' now={71} style={{marginLeft: "30px"}} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} xs={12}>
                            <h3 className='text-center text-md-end' style={{ color: "#009688" }}>LANGUES</h3>
                            <div className='text-center'>
                                <h5>FRANCAIS</h5>
                                <h5>ANGLAIS</h5>
                                <h5>POULAAR</h5>
                            </div>
                        </Col>
                        <Col md={6} xs={12}>
                            <h3 className='text-center text-md-start' style={{ color: "#009688" }}>HOBBIES</h3>
                            <div className='mx-5 txt'>
                                <h5>Créatrice du blog « Mon job de dev »</h5>
                                <h5>Le développement web en général</h5>
                                <h5>PWA</h5>
                                <h5>Calculs distribués</h5>
                            </div>
                        </Col>
                    </Row>
            </Container>
        </div>
    );
};

export default Competence;
