import React from 'react';
import Banner from '../../components/Banner/Banner';
import Statistics from '../Statistics/Statistics';
import TrendingApps from '../TrendingApps/TrendingApps';

const Home = () => {
    return (
        <div className='bg-[#000000]/2'>
            <Banner />
            <Statistics />
            <TrendingApps />
        </div>
    );
};

export default Home;