import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  return (
  
 <div id="programs" className="flex items-center justify-center bg-white px-6 md:px-60">
  <div className="space-y-6 border-l-2 border-dashed">
    <div className="relative w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
      </svg>
      <div className="ml-6">
        <h4 className="font-bold text-blue-500">Supporting Conservation Through Mobilizing Ecological Data from Kalimantan</h4>
        <p className="mt-2 max-w-screen-sm text-sm text-gray-500">Manajemen Data Survei Odonata di Hutan Kerangas, KHDTK Mungku Baru, Kalimantan Tengah untuk Dipublikasikan pada kanal Global Biodiversity Information Facility (GBIF)</p>
        <p className="mt-2 max-w-screen-sm text-sm text-gray-500">Manajemen Data Survei Odonata di Hutan Kerangas, KHDTK Mungku Baru, Kalimantan Tengah untuk Dipublikasikan pada kanal Global Biodiversity Information Facility (GBIF)</p>
        <span className="mt-1 block text-sm font-semibold text-blue-500">2007</span>
      </div>
    </div>
   
  </div>
</div>

  );
};

export default Timeline;