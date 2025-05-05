import React from 'react';
import Banner from '../../Components/Banner/Banner';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';
import CompaniesSection from '../../Components/CompaniesSection/CompaniesSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <CompaniesSection></CompaniesSection>
        </div>
    );
};

export default Home;