import React from 'react';
import connectUs from "../../assets/connectUs.png"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { Helmet } from 'react-helmet-async';

const ContactUs = () => {
    const headline = "Need Help Or Stuck?";
    const words = headline.split("");
    return (
        <div className='flex  justify-evenly items-center'>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <img src={connectUs} alt="connectUs" />
            <div className='border-2 border-red-800 p-10 rounded-2xl text-center space-y-5'>
                {
                    words.map((word,index) =>
                    
                    <motion.p 
                        initial = {{filter: "blur(10px)" , opacity: 0 , y: 12}}
                        animate = {{filter: "blur(0px)" , opacity: 1 , y: 0}}
                        transition={{duration:0.5 , delay:0.1*index}}
                        className="text-6xl font-extrabold text-red-400 inline-block mr-1.5"
                        key={index}>{word}
                    </motion.p> )
                }
                <h2 className='text-2xl font-bold text-black'>Email Us</h2>
                <p className='text-2xl font-bold text-purple-700'><a href="mailto:nusratmomita5591@gmail.com">Send email</a></p>
            </div>
        </div>
    );
};

export default ContactUs;