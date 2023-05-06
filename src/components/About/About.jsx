import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import useTitle from '../../Hooks/useTitle';

const About = () => {
    useTitle('About')
    return (
        <div>
            <NavigationBar></NavigationBar>
            <h2>This is about page coming..</h2>
        </div>
    );
};

export default About;