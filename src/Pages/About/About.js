import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { ExternalLink } from 'react-external-link';

const About = () => {
    return (
        <Container className="my-5">
            <h1 className="my-5">About Sami Meadad Choudhury</h1>
            <h5 className="w-50 mx-auto">
                <p>
                    I am a Full-stack Web Developer based in Dhaka, Bangladesh. I have a passion for building and developing mobile-first Single Page Web Application (SPA) that are intuitive, performant, and user-friendly.
                </p>
                <p>
                    I am a self-motivated and self-driven individual who is always looking for new challenges and opportunities to grow as a developer.
                </p>
                <p>
                    I have worked on several web based projects for a range of clients providing Web Development ( HTML, CSS, JS, React.js, React Router, WordPress, WooCommerce, Bootstrap, Tailwind, Material UI, Responsive Layouts, Node.js, Express.js, MongoDB, Firebase Auth, and Site Deployment on Netlify, Heroku, or Firebase), for static and dynamic websites.
                </p>
                <p>
                    During my Computer Science degree I studied Software Architecture, and Software Engineering, and therefore have a keen understanding of complete lifecycle of software engineering, project road map, and user need, which I put to good use on every project I work on.
                </p>
                <p className="mt-5">
                    Please check my detailed resume as follows.
                    <p className="mt-5">
                        <ExternalLink download href="https://drive.google.com/file/d/1DsUhL6cfpOjVEJnfgvO3c5BPBQzlDGKW/view?usp=sharing">
                            <Button className="btn btn-danger fw-bold fs-4 fy-5">Download My Resume</Button>
                        </ExternalLink>
                    </p>
                </p>
            </h5>
        </Container>
    );
};

export default About;