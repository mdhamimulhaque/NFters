import React from 'react';
import CollectionFeatures from './CollectionFeatures/CollectionFeatures';
import TopCollections from './TopCollections/TopCollections';
import TopHeroSection from './TopHeroSection/TopHeroSection';
import TransactionSection from './TransactionSection/TransactionSection';

const Home = () => {
    return (
        <div>
            <TopHeroSection />
            <TransactionSection />
            <TopCollections />
            <CollectionFeatures />
        </div>
    );
};

export default Home;