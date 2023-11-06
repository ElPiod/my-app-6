import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import imgCard_1 from '../assets/img/imgPort_1.png'
import imgCard_2 from '../assets/img/imgPort_2.png'
import imgCard_3 from '../assets/img/imgPort_3.png'
import imgCard_4 from '../assets/img/imgPort_4.png'
import imgCard_5 from '../assets/img/imgPort_5.png'
import imgCard_6 from '../assets/img/imgPort_6.png'

const Porfolio = () => {
    return (
        <div className='porfolio_wrapper' id='porfolio'>
            <Container className='bg-light'>
                <h1 className='text-center my-5'>PORFOLIO</h1>
                <Row className='justify-content-center justify-content-evenly my-4 row_port'>
                    <Col md={4} lg={3} xs={12}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={imgCard_1} className='myImgCard mx-auto my-2' />
                            <Card.Body>
                                <Card.Title className='text-center card-title'>Volkeno</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button>Voir le projet github</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} lg={3} xs={12}>
                        <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={imgCard_2} className='myImgCard mx-auto my-2' />
                                <Card.Body>
                                    <Card.Title className='text-center card-title'>Fewmu</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button>Voir le projet github</Button>
                                </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} lg={3} xs={12}>
                        <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={imgCard_3} className='myImgCard mx-auto my-2' />
                                <Card.Body>
                                    <Card.Title className='text-center card-title'>Fewmu Mobile</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button>Voir le projet github</Button>
                                </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='justify-content-center justify-content-evenly row_port my-4'>
                    <Col md={4} lg={3} xs={12}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={imgCard_4} className='myImgCard mx-auto my-2' />
                            <Card.Body>
                                <Card.Title className='text-center card-title'>Volkeno</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button>Voir le projet github</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} lg={3} xs={12}>
                        <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={imgCard_5} className='myImgCard mx-auto my-2' />
                                <Card.Body>
                                    <Card.Title className='text-center card-title'>Bakeli Payment</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button>Voir le projet github</Button>
                                </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} lg={3} xs={12}>
                        <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={imgCard_6} className='myImgCard mx-auto my-2' />
                                <Card.Body>
                                    <Card.Title className='text-center card-title'>Mixte Feewi</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button>Voir le projet github</Button>
                                </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Porfolio;