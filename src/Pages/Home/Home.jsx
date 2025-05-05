import React from 'react';
import Banner from '../../Components/Banner/Banner';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';
import CompaniesSection from '../../Components/CompaniesSection/CompaniesSection';
import SuccessInNumber from '../../Components/SuccessInNumber/SuccessInNumber';

const Home = () => {
    return (
        <div className='space-y-10'>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <CompaniesSection></CompaniesSection>
            <SuccessInNumber></SuccessInNumber>
        </div>
    );
};

export default Home;