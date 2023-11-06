import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Section1 = () => {
    return (
        <div className='section_1 my-3' id='presentation'>
            <div className='presentation_sec'>
                <h1 className='text-center'>Presentation</h1>
            </div>
            <Container>
                <Row>
                    <Col md={6} xs={12} className='my-2'>
                        <div className='d-flex align-items-center gap-2'><li className='num my-1'>1</li>Capacité d'apprentissage</div>
                        <div className='d-flex align-items-center gap-2'><li className='num my-1'>2</li>Collaboration</div>
                        <div className='d-flex align-items-center gap-2'><li className='num my-1'>3</li>Responsabilité</div>
                        <div className='d-flex align-items-center gap-2'><li className='num my-1'>5</li>Prise de décision</div>
                        <div className='d-flex align-items-center gap-2'><li className='num my-1'>5</li>Gestion du temps</div>
                    </Col>
                    <Col md={6} xs={12}>
                        <h4 className='pres-title'>Triforce !</h4>
                        <p className='pres-text'>À l'écoute, je suis FORCE de proposition, j'aime chercher des solutions 
                            et ainsi rendre services. Passionné par l'apprentissage et la découverte 
                            intellectuelle, j'ai développé une FORCE de travail afin de toujours 
                            progresser au quotidien. FORCE tranquille, j'ai toujours su collaborer et
                            pleinement m'intégrer au sein du collectif. <br/><br/>


                            Besoin d'un collaborateur flexible et persévérant ?
                            Je vous propose mes services par le biais d'une ALTERNANCE. Avec 4 
                            jours dans votre société et 1 jour en formation, le tout modulable comme 
                            vous le souhaitez, je pourrais facilement répondre à vos besoins.</p>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Section1;
