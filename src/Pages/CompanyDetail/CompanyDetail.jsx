import React from "react";
import { useLoaderData, useParams } from "react-router";
import JobDetails from "../JobDetails/JobDetails";

const CompanyDetail = () => {
  const { id } = useParams();
  // console.log(id)
  const jsonData = useLoaderData();

  const selectedCompany = jsonData.find((company) => company.id === id);
  // console.log(selectedCompany)

  return (
    <div>
      {/* everything but not list of jobs */}
      <div className="flex justify-center items-center gap-20 border-2 border-gray-950 rounded-2xl p-10 m-20">
        <div className="flex gap-5 items-center justify-center">
          <img
            className="w-20 h-20 border-2 border-indigo-800 rounded-2xl"
            src={selectedCompany.logo}
            alt="companyLogo"
          />
          <h1 className="text-3xl font-extrabold">
            Company Name : {selectedCompany.name}
          </h1>
        </div>
        {/* line */}
        <div className="h-[250px] min-h-[1em] w-[2px] self-stretch bg-black opacity-25 dark:via-black"></div>
        <div>
          <h1 className="text-2xl font-extrabold">
            Location : {selectedCompany.location}
          </h1>
          <h1 className="text-2xl font-extrabold">
            Industry type : {selectedCompany.industry}
          </h1>
          <h1 className="text-2xl font-extrabold">
            Visit company site :{" "}
            <a className="underline" href={selectedCompany.website}>
              Click here
            </a>
          </h1>
          <h1 className="text-2xl font-extrabold">
            Total Available Jobs :{" "}
            <span className="text-purple-800 text-3xl">
              {selectedCompany.jobs.length}
            </span>
          </h1>
        </div>
      </div>
      <h1 className="text-[#333333] text-4xl font-bold text-center">
        [ Available Jobs Description ]
      </h1>
      {/* jobs list */}
      <div className="mt-20 space-y-3 bg-fuchsia-200 mx-auto max-w-lg p-5 rounded-2xl">
        {selectedCompany.jobs.map((job) => <JobDetails key={job.id} job={job}></JobDetails>)}
      </div>
    </div>
  );
};

export default CompanyDetail;
