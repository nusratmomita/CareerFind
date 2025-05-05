import React from 'react';
import { NavLink } from 'react-router';

const CompaniesList = ({company}) => {
    // console.log(company)
    return (
        <div className='w-[250px] h-[200px] bg-linear-to-t from-purple-400 to-purple-500 flex flex-col justify-center items-center p-5 rounded-2xl'>
            <NavLink to={`/companyDetail/${company.id}`}><img className="w-20 h-20 rounded-2xl"src={company.logo}></img></NavLink>
            <h1 className='mt-3 text-center text-2xl font-bold  text-black'>{company.name}</h1>
        </div>
    );
};

export default CompaniesList;