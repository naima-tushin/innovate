import React from 'react';
import OverviewCollection from '../OverviewCollection/OverviewCollection';
import Discover from '../Discover/Discover';

const Homepage = () => {
    return (
        <div>
            <OverviewCollection/>
            <Discover/>
        </div>
    );
};

export default Homepage;