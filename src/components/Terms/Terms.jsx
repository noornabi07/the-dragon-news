import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';

const Terms = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <h2>Please Accept Our Terms & Condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta corrupti quidem sint, necessitatibus sequi vel reprehenderit vitae adipisci eius ipsam voluptatibus veritatis harum numquam exercitationem corporis ex. Placeat, fugiat.</p>

            <p>Go To Back <Link to="/register">Register</Link> </p>
        </div>
    );
};

export default Terms;