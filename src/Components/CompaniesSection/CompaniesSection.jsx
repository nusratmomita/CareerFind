import React, { use } from "react";
import CompaniesList from "../../Pages/CompaniesList/CompaniesList";
import handshake from "../../assets/handshake.png";
const jsonData = fetch("/CompanyData.json").then((res) => res.json());

const CompaniesSection = () => {
  const companyData = use(jsonData);
  // console.log(companyData)

  return (
    <>
      <div className="flex gap-2 justify-center items-center">
        <h1 className="text-[#333333] text-4xl font-bold text-center">
          [ Company Partners ]
        </h1>
        <img className="w-12 h-10" src={handshake} alt="categories" />
      </div>
      <div className="m-30 grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        {companyData.map((company) => (
          <CompaniesList key={company.id} company={company}></CompaniesList>
        ))}
      </div>
    </>
  );
};

export default CompaniesSection;
