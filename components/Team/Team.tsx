import React from "react";
import { motion } from "framer-motion";
import XIcon from "../Icons/XIcon";
import { MotionBTTContainer } from "../Motion";
import { useEffect, useRef } from "react";
import { MemberDetails } from "./MemberDetails";

const Team = ({ memberData }) => {
  return (
    
    <div id="team" className="flex md:px-5 mb-10 ">
  

      {/* <!-- Page Container --> */}
      <div className="flex items-center justify-center min-h-screen bg-white ">
        <div className="flex flex-col">
          <div className="flex flex-col mt-8">
            {/* <!-- Meet the Team --> */}
            <div className="container sm:max-w-sm md:max-w-7xl px-4">
              {/* <!-- Section Header --> */}
              <div className="flex flex-wrap justify-center text-center mb-10">
                <div className="w-full lg:w-6/12 px-4">
                  {/* <!-- Header --> */}
                  <MotionBTTContainer
                    className={""}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <h1 className="text-gray-900 text-4xl font-bold mb-8">
                      Meet the Team
                    </h1>
                  </MotionBTTContainer>
                  <MotionBTTContainer
                    className={""}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    {/* <!-- Description --> */}
                    <p className="text-gray-700 text-lg font-light">
                      Tim jawi tersusun atas peneliti dari berbagai disiplin
                      ilmu yang kompeten dan berpengalaman pada bidangnya.
                    </p>
                  </MotionBTTContainer>
                </div>
              </div>

              {/* <!-- Team Members --> */}
              <MotionBTTContainer
                className={""}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <hr className="w-full h-1 "></hr>
                <div className="flex justify-start flex-wrap">
                  {/* <!-- Render Team Members --> */}
                  {memberData
                    .filter((member) => member.grup === "top-leader")
                    .sort((a, b) => (a.prioritas > b.prioritas ? 1 : -1))
                    .map((member, index) => (
                      <>
                        <div
                          key={index}
                          className="w-full mt-5  flex items-start"
                        >
                        <MemberDetails member={member}/>
                        </div>
                      </>
                    ))}
                </div>
              </MotionBTTContainer>
              <hr className=" w-full mt-5 h-1 "></hr>
              <MotionBTTContainer
                className={""}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <div className="flex justify-center flex-wrap">
                  {/* <!-- Render Team Members --> */}
                  {memberData
                    .filter((member) => member.grup === "leader")
                    .sort((a, b) => (a.prioritas > b.prioritas ? 1 : -1))
                    .map((member, index) => (
                       <>
                        <div
                          key={index}
                          className="w-full mt-5  flex items-start"
                        >
                        <MemberDetails member={member}/>
                        </div>
                      </>
                    ))}
                </div>
              </MotionBTTContainer>
              <MotionBTTContainer
                className={""}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <hr className=" w-full h-1 mt-5 "></hr>
                <div className="flex justify-center flex-wrap">
                  {/* <!-- Render Team Members --> */}
                  {memberData
                    .filter((member) => member.grup === "head")
                    .sort((a, b) => (a.prioritas > b.prioritas ? 1 : -1))
                    .map((member, index) => (
                    <>
                        <div
                          key={index}
                          className="w-full mt-5  flex items-start"
                        >
                        <MemberDetails member={member}/>
                        </div>
                      </>
                    ))}
                </div>
              </MotionBTTContainer>
              <MotionBTTContainer
                className={""}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <hr className=" w-full h-1 mt-5 "></hr>
                <div className="flex justify-center flex-wrap">
                  {/* <!-- Render Team Members --> */}
                  {memberData
                    .filter((member) => member.grup === "staff")
                    .sort((a, b) => (a.prioritas > b.prioritas ? 1 : -1))
                    .map((member, index) => (
                        <>
                        <div
                          key={index}
                          className="w-full mt-5  flex items-start"
                        >
                        <MemberDetails member={member}/>
                        </div>
                      </>
                    ))}
                </div>
              </MotionBTTContainer>
              <MotionBTTContainer
                className={""}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <h1 className="mx-auto mt-10 text-center text-2xl font-bold">
                  Supervisory Board
                </h1>
              </MotionBTTContainer>
              <hr className=" w-full h-1 mt-5 "></hr>
              <div className="flex justify-center  flex-wrap">
                {/* <!-- Render Team Members --> */}
                {memberData
                  .filter((member) => member.grup === "supervisor")
                  .sort((a, b) => (a.prioritas > b.prioritas ? 1 : -1))
                  .map((member, index) => (
                     <>
                        <div
                          key={index}
                          className="w-full mt-5  flex items-start"
                        >
                        <MemberDetails member={member}/>
                        </div>
                      </>
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

{
  /* <hr className=" w-full h-1 mt-5 "></hr> */
}
