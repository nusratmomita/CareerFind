import React from "react";
import { Helmet } from "react-helmet-async";

const RecentJobs = () => {
  return (
    <div>
      <h1 className='mt-20 text-[#0c0b0b] text-4xl font-bold text-center mb-15'>[ Recently Added Jobs ]</h1>
      <Helmet>
        <title>Added Jobs</title>
      </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:ml-50 m-20">
        <div className="card w-96 bg-blue-300 card-lg shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-2xl">Backend Developer</h2>
            <p className="text-xl font-semibold">
              [ Hired By SJ Innovations ]
            </p>
            <p className="font-semibold">
                Required Skills: Python/Java Backend Framework ,
                2+ years experience 
            </p>
          </div>
        </div>
        <div className="card w-96 bg-purple-200 card-lg shadow-sm">
        <div className="card-body">
            <h2 className="card-title text-2xl">Software Engineer</h2>
            <p className="text-xl font-semibold">
              [ Hired By FinVerse Corp ]
            </p>
            <p className="font-semibold">
                Required Skills: Competitive Programmer  ,
                Rating: 3**(CodeChef) / 1400+(CodeForces)
            </p>
          </div>
        </div>
        <div className="card w-96 bg-purple-200 card-lg shadow-sm">
        <div className="card-body">
            <h2 className="card-title text-2xl">Sr. Frontend Developer</h2>
            <p className="text-xl font-semibold">
              [ Hired By AuthLab ]
            </p>
            <p className="font-semibold">
                Required Skills: Laravel,Vue ,
                5+ years experience 
            </p>
          </div>
        </div>
        <div className="card w-96 bg-blue-300 card-lg shadow-sm">
        <div className="card-body">
            <h2 className="card-title text-2xl">UI/UX Designer</h2>
            <p className="text-xl font-semibold">
              [ Hired By FrameJobs ]
            </p>
            <p className="font-semibold">
                Required Skills: Figma , Photoshop , AdobeAI ,
                Recently Graduate/Experienced
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentJobs;
