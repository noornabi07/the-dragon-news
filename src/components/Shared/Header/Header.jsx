import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import NavigationBar from '../NavigationBar/NavigationBar';


const Header = () => {

    return (
        <Container>
            <div className='text-center mt-3'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>

            <div className='d-flex mb-2'>
                <Button variant="danger">Danger</Button>
                <Marquee className='text-danger font-bold' speed={80}>
                    Match Highlights: Germany vs Spain — as it happened Match Highlights: Germany vs Spain as  !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>

            <NavigationBar></NavigationBar>
        </Container>
    );
};

export default Header;