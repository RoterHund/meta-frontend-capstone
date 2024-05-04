import React from "react";
import small_logo from "../../images/small_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Import solid icons
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

const socials = [
    {
        icon: faFacebook,
        url: "https://www.facebook.com",
    },
    {
        icon: faTwitter,
        url: "https://www.twitter.com",
    },
    {
        icon: faInstagram,
        url: "https://www.instagram.com",
    },
];

const Footer = () => {
    return (
        <footer>
            <section>
                <div>
                    <img src={small_logo} alt="Small Logo" />
                </div>
                <div>
                    <h3 className="footer-heading">Navigation</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer-heading">Contact</h3>
                    <ul className="contact-info">
                        <li><FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> 123 Lemon Street, Dublin</li>
                        <li><FontAwesomeIcon icon={faPhone} className="icon" /> +123 456 7890</li>
                        <li><FontAwesomeIcon icon={faEnvelope} className="icon" /> info@littlelemon.com</li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer-heading">Social Media</h3>
                    <ul className="social-links">
                        {socials.map((social, index) => (
                            <li key={index}>
                                <a href={social.url} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={social.icon} className="social-icon" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
