import React from 'react';
import { ExternalLink } from 'react-external-link';
import logo from '../../images/logo.png';

//component for footer
const Footer = () => {
    return (
        <footer className="bg-dark p-5 text-light">
            <div className="text-center mb-3">
                <h1>Sami Meadad Choudhury</h1>
                <img style={ { width: '150px' } } src={ logo } alt="logoImage" />
            </div>
            <div className="container mb-5">
                <h4 className="text-justify text-light">
                    I am a full stack web developer concentrated on MERN Stack (MongoDB, Express JS, React JS, and Node JS).
                </h4>
            </div>

            <p className="mt-5 text-center text-light">
                <ExternalLink href="https://github.com/samimeadad" target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-github text-light me-4 fs-1" data-toggle="tooltip" title="Facebook"></i></ExternalLink>
                <ExternalLink href="https://www.linkedin.com/in/sami-meadad-choudhury/" target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-linkedin text-info me-4 fs-1" data-toggle="tooltip" title="Linkedin"></i></ExternalLink>
                <ExternalLink href="https://www.facebook.com/sami.meadad/" target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-facebook text-primary me-4 fs-1" data-toggle="tooltip" title="Facebook"></i></ExternalLink>
                <ExternalLink href="https://twitter.com/ShahebChoudhury" target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-twitter text-info me-4 fs-1" data-toggle="tooltip" title="Twitter"></i></ExternalLink>
                <ExternalLink href="https://www.youtube.com/channel/UCM3QQistVe37QERt9RBKWtA" target="_blank" rel="noreferrer"><i style={ { color: "red" } } aria-hidden="true" className="fab fa-youtube me-4 fs-1" data-toggle="tooltip" title="Github"></i></ExternalLink>
            </p>
            <p className="text-secondary text-center fs-6"><small>&copy;Sami Meadad Choudhury</small></p>
        </footer >
    );
};

export default Footer;