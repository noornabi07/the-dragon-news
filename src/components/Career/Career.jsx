import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import useTitle from '../../Hooks/useTitle';

const Career = () => {
    useTitle('Career')
    return (
        <div>
            <NavigationBar></NavigationBar>
            <h2>This is career page coming...</h2>
        </div>
    );
};

export default Career;