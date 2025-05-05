import React, { use } from 'react';
import CompaniesList from '../../Pages/CompaniesList/CompaniesList';

const jsonData = fetch("/CompanyData.json").then(res => res.json());

const CompaniesSection = () => {
    const companyData = use(jsonData);
    // console.log(companyData)

    return (
        <>
            <h1 className='text-[#333333] text-4xl font-bold text-center'>[ Company Partners ]</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 m-20'>
                {
                    companyData.map((company) => <CompaniesList key={company.id} company={company}></CompaniesList>)
                }
            </div>
        </>
    );
};

export default CompaniesSection;