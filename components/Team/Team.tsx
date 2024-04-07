

import React from 'react';
import { motion } from 'framer-motion';
import XIcon from '../Icons/XIcon';
import { MotionBTTContainer } from '../Motion';
import  { useEffect, useRef } from 'react';

const Team = ({ memberData }) => {
   

    return (
        <div id="team" className='md:pt-20' >
            <link rel="stylesheet" href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css" />

            {/* <!-- Page Container --> */}
            <div className="flex items-center justify-center min-h-screen bg-white">
                <div className="flex flex-col">
                    <div className="flex flex-col mt-8">
                        {/* <!-- Meet the Team --> */}
                        <div className="container max-w-7xl px-4">
                            {/* <!-- Section Header --> */}
                            <div className="flex flex-wrap justify-center text-center mb-10">
                                <div className="w-full lg:w-6/12 px-4">
                                    {/* <!-- Header --> */}
                                     <MotionBTTContainer className={""} transition={{ delay: 0.7, duration: 0.5 }}>
                           
                                    <h1 className="text-gray-900 text-4xl font-bold mb-8">
                                        Meet the Team
                                    </h1>
                                    </MotionBTTContainer>
                                     <MotionBTTContainer className={""} transition={{ delay: 1, duration: 0.5 }}>
                                    {/* <!-- Description --> */}
                                    <p className="text-gray-700 text-lg font-light">
                                        Tim jawi tersusun atas peneliti dari berbagai disiplin ilmu yang kompeten dan berpengalaman pada bidangnya.
                                    </p>
                                    </MotionBTTContainer>
                                </div>
                            </div>
                          
                            {/* <!-- Team Members --> */}
                                <MotionBTTContainer className={""} transition={{ delay: 0.9, duration: 0.5 }}>
                            <div className="flex justify-center flex-wrap">
                                {/* <!-- Render Team Members --> */}
                                {memberData.filter(member => member.grup === 'top-leader').sort((a, b) => (a.prioritas > b.prioritas ? 1 : -1)).map((member, index) => (
                                    <div key={index} className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                                        <div className="flex flex-col">
                                            {/* <!-- Avatar --> */}
                                            <a href="#" className="mx-auto">
                                                <img className="rounded-2xl drop-shadow-md h-48 w-40 object-cover hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                    src={member.foto} alt={member.nama} />
                                            </a>

                                            {/* <!-- Details --> */}
                                            <div className="text-center mt-6">
                                                {/* <!-- Name --> */}
                                                <h1 className="text-gray-900 text-sm font-bold mb-1 overflow-hidden whitespace-nowrap">
                                                    {member.nama}
                                                </h1>

                                                {/* <!-- Title --> */}
                                                <div className="text-gray-700 text-sm font-light mb-2">
                                                    {member.jabatan}
                                                </div>

                                                {/* <!-- Social Icons --> */}
                                                <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                                    transition-opacity duration-300">
                                                    {/* <!-- LinkedIn --> */}
                                                    {member.linkedIn && (
                                                        <a href={member.linkedIn} target='_blank' className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                                            <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                                                        </a>
                                                    )}

                                                      {/* <!-- X --> */}

                                                     {member.x && (
                                                        <a href={member.x} target='_blank' className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                                        {/* <i className="mdi mdi-x text-blue-300 mx-auto mt-2"></i> */}
                                                           <XIcon width={12} className={'mx-auto'}/>
                                                        </a>
                                                    )}
                                     

                                                    {/* <!-- Facebook --> */}
                                                    {member.facebook && (
                                                        <a href={member.facebook} target='_blank' className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                                            <i className="mdi mdi-facebook text-indigo-400 mx-auto mt-2"></i>
                                                        </a>
                                                    )}

                                                    {/* <!-- Instagram --> */}
                                                    {member.instagram && (
                                                        <a href={member.instagram} target='_blank' className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                                </MotionBTTContainer>
                            <div className="flex justify-center flex-wrap">
                                {/* <!-- Render Team Members --> */}
                                {memberData.filter(member => member.grup === 'leader').sort((a, b) => (a.prioritas > b.prioritas ? 1 : -1)).map((member, index) => (
                                    <div key={index} className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                                        <MotionBTTContainer className={""} transition={{ delay: 0.9, duration: 0.5 }}>
                                        <div className="flex flex-col">
                                            {/* <!-- Avatar --> */}
                                            <a href="#" className="mx-auto">
                                                <img className="rounded-2xl drop-shadow-md h-48 w-40 object-cover hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                    src={member.foto} alt={member.nama} />
                                            </a>

                                            {/* <!-- Details --> */}
                                            <div className="text-center mt-6">
                                                {/* <!-- Name --> */}
                                                <h1 className="text-gray-900 text-sm font-bold mb-1 overflow-hidden whitespace-nowrap">
                                                    {member.nama}
                                                </h1>

                                                {/* <!-- Title --> */}
                                                <div className="text-gray-700 text-sm font-light mb-2">
                                                    {member.jabatan}
                                                </div>

                                                {/* <!-- Social Icons --> */}
                                                <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                                    transition-opacity duration-300">
                                                    {/* <!-- LinkedIn --> */}
                                                    {member.linkedIn && (
                                                        <a href={member.linkedIn} target='_blank' className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                                            <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                                                        </a>
                                                    )}

                                                      {/* <!-- X --> */}

                                                     {member.x && (
                                                        <a href={member.x} target='_blank' className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                                        {/* <i className="mdi mdi-x text-blue-300 mx-auto mt-2"></i> */}
                                                           <XIcon width={12} className={'mx-auto'}/>
                                                        </a>
                                                    )}
                                     

                                                    {/* <!-- Facebook --> */}
                                                    {member.facebook && (
                                                        <a href={member.facebook} target='_blank' className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                                            <i className="mdi mdi-facebook text-indigo-400 mx-auto mt-2"></i>
                                                        </a>
                                                    )}

                                                    {/* <!-- Instagram --> */}
                                                    {member.instagram && (
                                                        <a href={member.instagram} target='_blank' className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                            </MotionBTTContainer>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center flex-wrap">
                                {/* <!-- Render Team Members --> */}
                                {memberData.filter(member => member.grup === 'head').sort((a, b) => (a.prioritas > b.prioritas ? 1 : -1)).map((member, index) => (
                                    <div key={index} className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                                        <MotionBTTContainer className={""} transition={{ delay: 0.9, duration: 0.5 }}>
                                        <div className="flex flex-col">
                                            {/* <!-- Avatar --> */}
                                            <a href="#" className="mx-auto">
                                                <img className="rounded-2xl drop-shadow-md h-48 w-40 object-cover hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                    src={member.foto} alt={member.nama} />
                                            </a>

                                            {/* <!-- Details --> */}
                                            <div className="text-center mt-6">
                                                {/* <!-- Name --> */}
                                                <h1 className="text-gray-900 text-sm font-bold mb-1 overflow-hidden whitespace-nowrap">
                                                    {member.nama}
                                                </h1>

                                                {/* <!-- Title --> */}
                                                <div className="text-gray-700 text-sm font-light mb-2">
                                                    {member.jabatan}
                                                </div>

                                                {/* <!-- Social Icons --> */}
                                                <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                                    transition-opacity duration-300">
                                                    {/* <!-- LinkedIn --> */}
                                                    {member.linkedIn && (
                                                        <a href={member.linkedIn} target='_blank' className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                                            <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                                                        </a>
                                                    )}

                                                      {/* <!-- X --> */}

                                                     {member.x && (
                                                        <a href={member.x} target='_blank' className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                                        {/* <i className="mdi mdi-x text-blue-300 mx-auto mt-2"></i> */}
                                                           <XIcon width={12} className={'mx-auto'}/>
                                                        </a>
                                                    )}
                                     

                                                    {/* <!-- Facebook --> */}
                                                    {member.facebook && (
                                                        <a href={member.facebook} target='_blank' className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                                            <i className="mdi mdi-facebook text-indigo-400 mx-auto mt-2"></i>
                                                        </a>
                                                    )}

                                                    {/* <!-- Instagram --> */}
                                                    {member.instagram && (
                                                        <a href={member.instagram} target='_blank' className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                </MotionBTTContainer>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center flex-wrap">
                                {/* <!-- Render Team Members --> */}
                                {memberData.filter(member => member.grup === 'staff').sort((a, b) => (a.prioritas > b.prioritas ? 1 : -1)).map((member, index) => (
                                    <div key={index} className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                                        <MotionBTTContainer className={""} transition={{ delay: 0.9, duration: 0.5 }}>
                                        <div className="flex flex-col">
                                            {/* <!-- Avatar --> */}
                                            <a href="#" className="mx-auto">
                                                <img className="rounded-2xl drop-shadow-md h-48 w-40 object-cover hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                    src={member.foto} alt={member.nama} />
                                            </a>

                                            {/* <!-- Details --> */}
                                            <div className="text-center mt-6">
                                                {/* <!-- Name --> */}
                                                <h1 className="text-gray-900 text-sm font-bold mb-1 overflow-hidden whitespace-nowrap">
                                                    {member.nama}
                                                </h1>

                                                {/* <!-- Title --> */}
                                                <div className="text-gray-700 text-sm font-light mb-2">
                                                    {member.jabatan}
                                                </div>

                                                {/* <!-- Social Icons --> */}
                                                <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                                    transition-opacity duration-300">
                                                    {/* <!-- LinkedIn --> */}
                                                    {member.linkedIn && (
                                                        <a href={member.linkedIn} target='_blank' className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                                            <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                                                        </a>
                                                    )}

                                                      {/* <!-- X --> */}

                                                     {member.x && (
                                                        <a href={member.x} target='_blank' className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                                        {/* <i className="mdi mdi-x text-blue-300 mx-auto mt-2"></i> */}
                                                           <XIcon width={12} className={'mx-auto'}/>
                                                        </a>
                                                    )}
                                     

                                                    {/* <!-- Facebook --> */}
                                                    {member.facebook && (
                                                        <a href={member.facebook} target='_blank' className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                                            <i className="mdi mdi-facebook text-indigo-400 mx-auto mt-2"></i>
                                                        </a>
                                                    )}

                                                    {/* <!-- Instagram --> */}
                                                    {member.instagram && (
                                                        <a href={member.instagram} target='_blank' className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                </MotionBTTContainer>
                                    </div>
                                ))}
                            </div>
                                <MotionBTTContainer className={""} transition={{ delay: 0.9, duration: 0.5 }}>
                                <h1 className='mx-auto text-center text-2xl font-bold'>Supervisory Board</h1>
                            </MotionBTTContainer>
                            <div className="flex justify-center  flex-wrap">
                                {/* <!-- Render Team Members --> */}
                                {memberData.filter(member => member.grup === 'supervisor').sort((a, b) => (a.prioritas > b.prioritas ? 1 : -1)).map((member, index) => (
                                    
                                    <div key={index} className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                                        <MotionBTTContainer className={""} transition={{ delay: 0.9, duration: 0.5 }}>
                                        <div className="flex flex-col">
                                            {/* <!-- Avatar --> */}
                                            <a href="#" className="mx-auto">
                                                <img className="rounded-2xl drop-shadow-md h-48 w-40 object-cover hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                    src={member.foto} alt={member.nama} />
                                            </a>

                                            {/* <!-- Details --> */}
                                            <div className="text-center mt-6">
                                                {/* <!-- Name --> */}
                                                <h1 className="text-gray-900 text-sm font-bold mb-1 overflow-hidden whitespace-nowrap">
                                                    {member.nama}
                                                </h1>

                                                {/* <!-- Title --> */}
                                                <div className="text-gray-700 text-sm font-light mb-2">
                                                    {member.jabatan}
                                                </div>

                                                {/* <!-- Social Icons --> */}
                                                <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                                    transition-opacity duration-300">
                                                    {/* <!-- LinkedIn --> */}
                                                    {member.linkedIn && (
                                                        <a href={member.linkedIn} target='_blank' className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                                            <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                                                        </a>
                                                    )}

                                                      {/* <!-- X --> */}

                                                     {member.x && (
                                                        <a href={member.x} target='_blank' className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                                        {/* <i className="mdi mdi-x text-blue-300 mx-auto mt-2"></i> */}
                                                           <XIcon width={12} className={'mx-auto'}/>
                                                        </a>
                                                    )}
                                     

                                                    {/* <!-- Facebook --> */}
                                                    {member.facebook && (
                                                        <a href={member.facebook} target='_blank' className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                                            <i className="mdi mdi-facebook text-indigo-400 mx-auto mt-2"></i>
                                                        </a>
                                                    )}

                                                    {/* <!-- Instagram --> */}
                                                    {member.instagram && (
                                                        <a href={member.instagram} target='_blank' className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                </MotionBTTContainer>
                                    </div>
                                ))}
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
