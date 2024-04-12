import React from "react";
import XIcon from "../Icons/XIcon";

export const MemberDetails = ({ member }) => {
  return (
    <>
      {/* Avatar */}
      <a href="#" className="flex-none w-40">
        <img
          className="rounded-none drop-shadow-md h-48 w-40 object-cover hover:drop-shadow-xl transition-all duration-200 delay-100"
          src={member.foto}
          alt={member.nama}
        />
      </a>

      {/* Details */}
      <div className="flex flex-col justify-start items-start mt-0 ml-6">
        {/* Name */}
<h1 className="text-gray-900 sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl mt-5 text-left font-bold mb-3">
  {member.nama}
</h1>
<div className="text-gray-700 sm:text-base md:text-lg lg:text-xl xl:text-2xl text-left font-light mb-3">
  {member.jabatan}
</div>



        {/* Social Icons */}
        <div className="flex items-left justify-start opacity-50 hover:opacity-100 transition-opacity duration-300 space-x-4">
          {/* LinkedIn */}
          {member.linkedIn && (
            <a
              href={member.linkedIn}
              target="_blank"
              className="flex rounded-full items-center justify-center"
            >
              <i className="mdi mdi-linkedin hover:underline text-indigo-500"></i>
            </a>
          )}

          {/* X */}
          {member.x && (
            <a
              href={member.x}
              target="_blank"
              className="flex rounded-full items-center justify-center"
            >
              <XIcon width={12} className={"mx-auto"} />
            </a>
          )}

          {/* Facebook */}
          {member.facebook && (
            <a
              href={member.facebook}
              target="_blank"
              className="flex rounded-full items-center justify-center"
            >
              <i className="mdi mdi-facebook text-indigo-400"></i>
            </a>
          )}

          {/* Instagram */}
          {member.instagram && (
            <a
              href={member.instagram}
              target="_blank"
              className="flex rounded-full items-center justify-center"
            >
              <i className="mdi mdi-instagram text-orange-400"></i>
            </a>
          )}
        </div>
      </div>
    </>
  );
};
