import React, { useState } from 'react';
import { FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram, FaNodeJs } from "react-icons/fa6";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { Download } from "lucide-react";
import pic from '/devil.jpg';

function Home() {
    return (
        <div name="Home" className="home max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
                
                {/* Left Section */}
                <div className="md:w-1/2 mt-10 space-y-4 order-2 md:order-1">
                    <span className="text-xl text-teal-400">Welcome To My World</span>

                    <div className="flex flex-wrap text-2xl md:text-3xl font-semibold">
                        <h1 className="mr-2">Hi, I'm a</h1>
                        <ReactTyped
                            className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 font-bold"
                            strings={["Full Stack Developer", "Programmer", "Coder!"]}
                            typeSpeed={60}
                            backSpeed={50}
                            loop
                        />
                    </div>

                    <p className="text-sm md:text-md text-gray-300 text-justify leading-relaxed">
                        Hello, I'm <strong className="text-white">Guguloth Akash</strong>, a passionate Software Engineer and MERN Stack Developer with strong problem-solving skills and a solid background in C, C++, Java, and JavaScript. 
                        <br />
                        <span className="font-semibold">In simple words, <span className="text-purple-400">I am a Developer 😊</span></span>
                    </p>

                    {/* Social Media & Tech Stack */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-6">
                        
                        {/* Social Media */}
                        <div>
                            <h1 className="font-bold text-lg mb-2">Connect with me</h1>
                            <div className="flex space-x-5 text-2xl text-white">
                                <a href="https://www.linkedin.com/in/g-akash-4b1b40256/" target='_blank' rel='noopener noreferrer'>
                                    <FaLinkedin className="hover:text-blue-400 transition-all duration-200" />
                                </a>
                                <a href="https://github.com/google-akash" target='_blank' rel='noopener noreferrer'>
                                    <FaGithub className="hover:text-gray-300 transition-all duration-200" />
                                </a>
                                
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h1 className="font-bold text-lg mb-2">Tech Stack</h1>
                            <div className="flex space-x-4 text-3xl">
                                <SiMongodb className="hover:scale-110 text-green-500 transition-transform" />
                                <SiExpress className="hover:scale-110 text-gray-400 transition-transform" />
                                <FaReact className="hover:scale-110 text-cyan-400 transition-transform" />
                                <FaNodeJs className="hover:scale-110 text-green-300 transition-transform" />
                            </div>
                        </div>
                    </div>

                    {/* Resume Button */}
                    <div className="pt-8">
                        <a
                            href="/AkResume.pdf"
                            download
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300"
                        >
                            <Download size={18} />
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* Right Section */}
                <div className="md:w-1/2 flex justify-center md:justify-end order-1">
                    <img 
                        src={pic} 
                        alt="profile"
                        className="rounded-full border-4 border-teal-400 shadow-2xl w-64 h-64 md:w-[450px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
