import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const CompanyDetail = () => {
    const {id} = useParams();
    console.log(id)
    const jsonData = useLoaderData();

    const selectedCompany = jsonData.find((company) => company.id === id);
    console.log(selectedCompany)
    return (
        <div>
            
        </div>
    );
};

export default CompanyDetail;