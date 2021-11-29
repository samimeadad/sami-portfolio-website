import React from 'react';
import { Button, Card, Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { ExternalLink } from 'react-external-link';
import avatar from '../../images/avatar.png';
import featureWeb from '../../images/feature__web.png';
import featureTools from '../../images/feature__tools.png';
import featureWordpress from '../../images/feature__wp.png';

const Home = () => {
    return (
        <Container className="my-5 overflow-hidden">
            <section className="my-5">
                <h1 className="mb-5 fw-bold text-primary">Successful Full-stack Web Development</h1>
                <img src={ avatar } alt="avatar" className="img-fluid mb-5" style={ { width: "300px" } } />
                <h5 className="w-75 mx-auto mb-5">Hello, I am <span className="text-primary fw-bold">Sami</span>, an experienced IT & Telecom professional with 15 years of experience currently practicing Full-stack Web Development with <span className="text-primary fw-bold">MERN</span> Stack. Please download my resume for further details. </h5>
                <Row className="gx-3 gy-5">
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <Card style={ { width: '20rem', backgroundColor: '#F4F6F6' } } className="h-100 p-5 rounded-3 text-center">
                            <Card.Img variant="top" src={ featureWeb } className="img-fluid" />
                            <Card.Body>
                                <Card.Title>Front-end Development</Card.Title>
                                <Card.Text>
                                    Responsive websites built for an optimal user experience that achieves your business goals.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <Card style={ { width: '20rem', backgroundColor: '#F4F6F6' } } className="h-100 p-5 rounded-3 text-center">
                            <Card.Img variant="top" src={ featureTools } className="img-fluid" />
                            <Card.Body>
                                <Card.Title>Performance, SEO, &
                                    accessibility testing</Card.Title>
                                <Card.Text>
                                    Make your website fast, easy to find, and reach the widest audience possible.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <Card style={ { width: '20rem', backgroundColor: '#F4F6F6' } } className="h-100 p-5 rounded-3 text-center">
                            <Card.Img variant="top" src={ featureWordpress } className="img-fluid" />
                            <Card.Body>
                                <Card.Title>WordPress websites</Card.Title>
                                <Card.Text>
                                    Manage your website using the web's most popular content management system.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
            <hr />
            <section className="my-5">
                <h1 className="my-5 fw-bold text-primary">Know More About Me</h1>
                <Row className="my-5 gy-5">
                    <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                        <Button className="btn btn-danger fw-bold fs-4 fy-5">Download My Resume</Button>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                        <div className="text-center text-light">
                            <ExternalLink href="https://github.com/samimeadad" target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-github text-dark me-4 fs-1" data-toggle="tooltip" title="Facebook"></i></ExternalLink>
                            <ExternalLink href="https://www.linkedin.com/in/sami-meadad-choudhury/" target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-linkedin text-info me-4 fs-1" data-toggle="tooltip" title="Linkedin"></i></ExternalLink>
                            <ExternalLink href="https://www.facebook.com/sami.meadad/" target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-facebook text-primary me-4 fs-1" data-toggle="tooltip" title="Facebook"></i></ExternalLink>
                            <ExternalLink href="https://twitter.com/ShahebChoudhury" target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-twitter text-info me-4 fs-1" data-toggle="tooltip" title="Twitter"></i></ExternalLink>
                            <ExternalLink href="https://www.youtube.com/channel/UCM3QQistVe37QERt9RBKWtA" target="_blank" rel="noreferrer"><i style={ { color: "red" } } aria-hidden="true" className="fab fa-youtube me-4 fs-1" data-toggle="tooltip" title="Github"></i></ExternalLink>
                        </div>
                    </Col>
                </Row>
            </section>
            <hr />
            <section className="my-5">
                <h1 className="mb-3 fw-bold text-primary">My Skills</h1>
                <h5 className="w-75 mx-auto mb-5">I have a strong knowledge of the following technologies:</h5>
                <Row>
                    <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                        <h3 className="fw-bold">Front-End</h3>
                        <ul className="list-group">
                            <li className="list-group-item fw-bold fs-5">HTML5 <ProgressBar now={ 90 } label="90%" /></li>
                            <li className="list-group-item fw-bold fs-5">CSS3<ProgressBar now={ 75 } label="75%" /></li>
                            <li className="list-group-item fw-bold fs-5">JavaScript<ProgressBar now={ 80 } label="80%" /></li>
                            <li className="list-group-item fw-bold fs-5">React.js/React Router V5/V6<ProgressBar now={ 80 } label="80%" /></li>
                            <li className="list-group-item fw-bold fs-5">Bootstrap<ProgressBar now={ 100 } label="100%" /></li>
                            <li className="list-group-item fw-bold fs-5">Material UI<ProgressBar now={ 90 } label="90%" /></li>
                            <li className="list-group-item fw-bold fs-5">Tailwind<ProgressBar now={ 80 } label="80%" /></li>
                        </ul>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                        <h3 className="fw-bold">Back-End</h3>
                        <ul>
                            <li className="list-group-item fw-bold fs-5">Node.js<ProgressBar now={ 70 } label="70%" /></li>
                            <li className="list-group-item fw-bold fs-5">Express.js<ProgressBar now={ 75 } label="75%" /></li>
                            <li className="list-group-item fw-bold fs-5">MongoDB<ProgressBar now={ 75 } label="75%" /></li>
                            <li className="list-group-item fw-bold fs-5">JSON<ProgressBar now={ 90 } label="90%" /></li>
                            <li className="list-group-item fw-bold fs-5">MySQL<ProgressBar now={ 60 } label="60%" /></li>
                        </ul>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                        <ul>
                            <h3 className="fw-bold">Third-party Tools</h3>
                            <li className="list-group-item fw-bold fs-5">VS Code/ATOM</li>
                            <li className="list-group-item fw-bold fs-5">Git<ProgressBar now={ 80 } label="80%" /></li>
                            <li className="list-group-item fw-bold fs-5">GitHub<ProgressBar now={ 90 } label="90%" /></li>
                            <li className="list-group-item fw-bold fs-5">Heroku<ProgressBar now={ 75 } label="75%" /></li>
                            <li className="list-group-item fw-bold fs-5">Netlify<ProgressBar now={ 80 } label="80%" /></li>
                            <li className="list-group-item fw-bold fs-5">Firebase Auth<ProgressBar now={ 80 } label="80%" /></li>
                            <li className="list-group-item fw-bold fs-5">Firebase Hosting<ProgressBar now={ 90 } label="90%" /></li>
                            <li className="list-group-item fw-bold fs-5">Browser Dev Tools<ProgressBar now={ 80 } label="80%" /></li>
                        </ul>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                        <h3 className="fw-bold">Others</h3>
                        <ul>
                            <li className="list-group-item fw-bold fs-5">Client/Server Architecture<ProgressBar now={ 90 } label="90%" /></li>
                            <li className="list-group-item fw-bold fs-5">Linux Sys Admin<ProgressBar now={ 80 } label="80%" /></li>
                            <li className="list-group-item fw-bold fs-5">Automation with Ansible<ProgressBar now={ 70 } label="70%" /></li>
                            <li className="list-group-item fw-bold fs-5">Aamazon Web Services<ProgressBar now={ 60 } label="60%" /></li>
                            <li className="list-group-item fw-bold fs-5">CI/CD<ProgressBar now={ 50 } label="50%" /></li>
                            <li className="list-group-item fw-bold fs-5">Wordpress<ProgressBar now={ 90 } label="90%" /></li>
                            <li className="list-group-item fw-bold fs-5">Leadership/Teamwork<ProgressBar now={ 100 } label="100%" /></li>
                        </ul>
                    </Col>
                </Row>
            </section>
            <hr />
            <section className="my-5">
                <h1 className="mb-3 fw-bold text-primary">Featured Projects</h1>
            </section>
            <hr />
        </Container >
    );
};

export default Home;