import React from 'react';

const JobDetails = ({job}) => {
      const handleDetails = () => {
    console.log("BTn clicked")
  }

    return (
        <>
            <h1 className="text-[#333333] text-xl font-bold text-center">
              Title :<span> {job.title}</span>
            </h1>
            <h1 className="text-[#333333] text-xl font-bold text-center">
              Type :<span> {job.jobType}</span>
            </h1>
            <h1 className="text-[#333333] text-xl font-bold text-center">
              Salary :<span> {job.salary} (negotiable)</span>
            </h1>
            <button onClick={handleDetails}
              type="button"
              className="ml-40 inline-block rounded-full border-4 border-info px-6 pb-[6px] pt-2 text-xl font-medium uppercase 
                leading-normal text-info transition duration-150 
                ease-in-out hover:border-info-600 hover:bg-blue-400 hover:text-info-600 
                focus:border-info-600 focus:bg-blue-700 focus:text-info-600 focus:outline-none 
                focus:ring-0 active:border-info-700 active:text-info-700 motion-reduce:transition-none
                dark:hover:bg-blue-950 dark:focus:bg-blue-950"
              data-twe-ripple-init
            >
              Details
            </button>
            <div className="divider divider-primary"></div>
          </>
    );
};

export default JobDetails;