import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <div>
            <h2>Login With</h2>
            <Button variant="outline-primary" className='mb-2'><FaGoogle /> Login With Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login With Github</Button>

            <div className='mt-5'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>

            <QZone></QZone>
        </div>
    );
};

export default RightNav;