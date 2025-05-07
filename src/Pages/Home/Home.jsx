import React from 'react';
import Banner from '../../Components/Banner/Banner';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';
import CompaniesSection from '../../Components/CompaniesSection/CompaniesSection';
import SuccessInNumber from '../../Components/SuccessInNumber/SuccessInNumber';
import PopularJobs from '../../Components/PopularJobs/PopularJobs';
import { Helmet } from 'react-helmet-async';
const Home = () => {
    return (
        <div className='space-y-10'>
            <Helmet>
                <title>Home</title>
            </Helmet>
                <Banner></Banner>
                <HowItWorks></HowItWorks>
                <CompaniesSection></CompaniesSection>
                <PopularJobs></PopularJobs>
                <SuccessInNumber></SuccessInNumber>
        </div>
    );
};

export default Home;