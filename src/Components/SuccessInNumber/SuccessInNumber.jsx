import React from 'react';
import boss from '../../assets/boss.png';
import visit from '../../assets/visit.png';
import job from '../../assets/job.png';
import CountUp from 'react-countup';

const SuccessInNumber = () => {
    return (
        <>
            <h1 className='mt-20 text-[#333333] text-4xl font-bold text-center'> [ Honour Section ]</h1>
            <div className='text-3xl font-bold flex flex-col lg:flex-row justify-center items-center gap-5 m-15'>
                {/* Total jobs given */}
                <div className='bg-purple-300 w-full p-5 flex flex-col gap-5 justify-center items-center'>
                    <h1 className='text-5xl'><CountUp start={0} end={100} delay={2}></CountUp>+</h1>
                    <div className='flex gap-3'>
                        <img className="w-10 h-10" src={job} ></img>
                        <p>Total Job Placements</p>
                    </div>
                </div>
                {/* Total Recruiters  */}
                <div className='bg-blue-300 w-full  p-5 flex flex-col gap-5 justify-center items-center'>
                    <h1 className='text-5xl'><CountUp start={0} end={1500} delay={2}></CountUp>+</h1>
                    <div className='flex gap-3'>
                            <img className="w-10 h-10" src={boss} ></img>
                            <p>Total Recruiters & HR</p>
                    </div>
                </div>
                {/* Total daily visits Total Daily visits*/}
                <div className='bg-purple-300 w-full p-5 flex flex-col gap-5 justify-center items-center'>
                    <h1 className='text-5xl'><CountUp start={0} end={1000} delay={2}></CountUp>+</h1>
                    <div className='flex gap-3'>
                        <img className="w-10 h-10" src={visit} ></img>
                        <p>Total Daily visits</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SuccessInNumber;