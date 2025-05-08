import React from 'react';
import { Helmet } from 'react-helmet-async';


const JobDetails = ({job , website}) => {
    return (
        <>
        <Helmet>
          <title>Job Details</title>
        </Helmet>
            <h1 className="text-[#333333] text-xl font-bold text-center">
              Title :<span> {job.title}</span>
            </h1>
            <h1 className="text-[#333333] text-xl font-bold text-center">
              Type :<span> {job.jobType}</span>
            </h1>
            <h1 className="text-[#333333] text-xl font-bold text-center">
              Salary :<span> {job.salary} (negotiable)</span>
            </h1>
            <img className="border-3 border-amber-700 "src={job.bannerImage} alt="banner" />

            <button onClick={()=>document.getElementById('my_modal_1').showModal()}
              type="button"
              className="ml-40 inline-block rounded-full border-4 border-info px-6 pb-[6px] pt-2 text-xl font-medium uppercase 
                leading-normal text-info transition duration-150
                ease-in-out hover:border-info-600 hover:bg-blue-400 hover:text-info-600 
                focus:border-info-600 focus:bg-blue-700 focus:text-info-600 focus:outline-none 
                focus:ring-0 active:border-info-700 active:text-info-700 motion-reduce:transition-none
                dark:hover:bg-blue-950 dark:focus:bg-blue-950"
              data-twe-ripple-init>
                Details </button>
                <dialog id="my_modal_1" className="modal space-y-2">
                    <div className="modal-box">
                        <h3 className="font-bold text-xl">Hiring for - {job.title}</h3>
                        
                        <h1 className="font-bold text-lg">Location : {job.location}</h1>
                        <h2 className="font-bold text-lg">Expected Salary : {job.salary}</h2>
                        <h3 className="font-bold text-lg">{job.jobType}</h3>
                        <p className="font-bold text-lg text-center">{job?.description}</p>
                        <h3 className='font-bold text-lg'>Requirements : </h3>
                        {
                            job.requirements.map((req , index) => <li className="list-decimal text-black" key={index}> {req} </li>)
                        }
                        <div className="modal-action">
                            <a target="blank" href={website}><button className="btn">Apply</button></a>
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            <div className="divider divider-primary"></div>
          </>
    );
};

export default JobDetails;