import React from 'react';
import workingImage from '../../assets/howitworks.png';
import { NavLink } from 'react-router';
import { FaCloudUploadAlt } from "react-icons/fa";

const HowItWorks = () => {
    return (
        <div>
            <div className='flex gap-2 justify-center items-center'>
                <h1 className='text-[#333333] text-3xl font-bold text-center'>[ How This Website Works? ]</h1>
                <img className="w-12 h-10" src={workingImage} alt='workingImage'></img>
            </div>

                {/* steps */}
                <div class="-mt-5 text-4xl font-bold flex flex-col p-30 items-center space-y-10">

                    <div class="self-start bg-blue-300 text-blue-900 px-4 py-2 rounded-2xl shadow">
                        <h1>Create A Profile____</h1>
                        <p className='text-blue-800 mt-5 text-2xl font-medium'>To Continue with CareerFind first you need to create an account.
                        <NavLink to="/register"> [ Register Here ]</NavLink>
                        </p>
                        <p className='text-blue-800 mt-5 text-2xl font-medium'>Already have an account?
                        <NavLink to="/login"> [ Login Here ]</NavLink>
                        </p>
                    </div>


                    <div class="self-end bg-purple-300 text-purple-900 px-4 py-2 rounded-2xl shadow">
                       <h1>Upload Your CV Here___</h1>
                       <label className="text-2xl font-medium" for="myfile">Upload CV:</label>
                       <br />
                       <input className="text-2xl font-medium" type="file" id="myfile" name="myfile"></input>
                       <button type="button" class="text-white bg-[#4578f8] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2">
                            <FaCloudUploadAlt className='mr-4' size={25}></FaCloudUploadAlt>
                            Upload CV
                        </button>
                    </div>

                    <div class="self-start bg-blue-300 text-blue-900 px-4 py-2 rounded-2xl shadow">
                        <h1>Connect With Recruiters____</h1>
                        <p className='text-blue-800 mt-5 text-2xl font-medium'>Connect with recruiters by telling us about your <span className='underline'>skills and experience</span></p>
                        <p className='text-blue-800 mt-2 text-2xl font-medium'>We'll connect you with recruiters who are looking for candidates like you.                     
                        <NavLink to="/recruiter"> [ Know About your Recruiter ]</NavLink>
                        </p>
                    </div>


                    <div class="self-end bg-purple-300 text-purple-900 px-4 py-2 rounded-2xl shadow">
                       <h1>Mock Interview___</h1>
                       <p>
                          <h1 className='text-blue-800 mt-5 text-2xl font-medium'>Prepare for your interview with our mock interview feature.</h1>
                        </p>
                    </div>

                    
                    <div class="self-start bg-blue-300 text-blue-900 px-4 py-2 rounded-2xl shadow">
                        <h1>Search for jobs____</h1>
                        <p className='text-blue-800 mt-5 text-2xl font-medium'>Find Your dream jobs</p>
                        <p className='text-blue-800 mt-2 text-2xl font-medium'>Look for millions of jobs with our seamless searching tab.                     
                        <NavLink to="/recentJobs"> [ Job section ]</NavLink>
                        </p>
                    </div>
            </div>

        </div>
    );
};

export default HowItWorks;