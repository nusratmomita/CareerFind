import React from 'react';
import bannerImage from '../../assets/bannerImg.png' 
const Banner = () => {
    return (
        <div className='w-full lg:w-11/12 flex justify-between mx-auto gap-20 mt-15  bg-linear-to-b from-blue-900 to-indigo-100 p-10 rounded-2xl m-20'>
            <div className="left-side"></div>

            <div className="space-y-4">
            <h1 className="mt-6 text-6xl text-black font-extrabold">
                CareerFind<span className="text-white hidden lg:inline">___</span>
            </h1>
            <img className="lg:w-[500px] h-[120px] lg:h-[250px] ml-40 rounded-4xl shadow-xl" src={bannerImage} alt="logo"/>

            <p className="text-xl text-purple-900 font-semibold">
                <span className='text-3xl'>CareerFind</span> is a platform that connects job seekers with employers, providing a 
                <br />seamless experience for both parties. Our mission is to help individuals 
                <br />find their dream jobs.
                With a user-friendly interface and advanced search features, 
                <br />CareerFind makes job hunting easier.
            </p>
            </div>
    </div>

                    
    );
};

export default Banner;