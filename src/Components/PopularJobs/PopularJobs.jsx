import React from 'react';
import developer from '../../assets/developer.png';
import manager from '../../assets/manager.png';
import nurse from '../../assets/nurse.png';
import swe from '../../assets/software-engineer.png';
import teacher from '../../assets/teacher.png';
import tester from '../../assets/testing.png';

const PopularJobs = () => {
    return (
        <>
            <h1 className='mt-20 text-[#333333] text-4xl font-bold text-center'>[ Popular Job Categories ]</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

            <div className='bg-gray-100 w-[300px] h-35 rounded-2xl p-10 m-20 hover:bg-blue-300 hover:rounded-4xl'>
                <div className='flex gap-2'>
                    <img className="w-20 h-20 bg-gray-200" src={developer} alt="dev" />
                    <h1 className='text-center font-extrabold mt-3'>Full stack developer</h1>
                </div>
            </div>
            <div className='bg-gray-100 w-[300px] h-35 rounded-2xl p-10 m-20 hover:bg-purple-300 hover:rounded-4xl'>
                <div className='flex gap-4'>
                    <img className="w-20 h-20 bg-gray-200" src={manager} alt="manager" />
                    <h1 className='text-center font-extrabold mt-7'>Manager</h1>
                </div>
            </div>
            <div className='bg-gray-100 w-[300px] h-35 rounded-2xl p-10 m-20 hover:bg-blue-300 hover:rounded-4xl'>
                <div className='flex gap-4'>
                    <img className="w-20 h-20 bg-gray-200" src={nurse} alt="nurse" />
                    <h1 className='text-center font-extrabold mt-7'>Nurse</h1>
                </div>
            </div>
            <div className='bg-gray-100 w-[300px] h-35 rounded-2xl p-10 m-20 hover:bg-purple-300 hover:rounded-4xl'>
                <div className='flex gap-2'>
                    <img className="w-20 h-20 bg-gray-200" src={swe} alt="swe" />
                    <h1 className='text-center font-extrabold mt-3'>Software Engineer</h1>
                </div>
            </div>
            <div className='bg-gray-100 w-[300px] h-35 rounded-2xl p-10 m-20 hover:bg-blue-300 hover:rounded-4xl'>
                <div className='flex gap-4'>
                    <img className="w-20 h-20 bg-gray-200" src={teacher} alt="teacher" />
                    <h1 className='text-center font-extrabold mt-7'>Teacher</h1>
                </div>
            </div>
            <div className='bg-gray-100 w-[300px] h-35 rounded-2xl p-10 m-20 hover:bg-purple-300 hover:rounded-4xl'>
                <div className='flex gap-4'>
                    <img className="w-20 h-20 bg-gray-200" src={tester} alt="tester" />
                    <h1 className='text-center font-extrabold mt-7'>QA Tester</h1>
                </div>
            </div>
        </div>
        </>
    );
};

export default PopularJobs;