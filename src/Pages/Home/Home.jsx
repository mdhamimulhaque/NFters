import React from 'react';
import TopCollections from './TopCollections/TopCollections';
import TopHeroSection from './TopHeroSection/TopHeroSection';
import TransactionSection from './TransactionSection/TransactionSection';

const Home = () => {
    return (
        <div>
            <TopHeroSection />
            <TransactionSection />
            <TopCollections />
        </div>
    );
};

export default Home;