"use client";
import { Card, CardBody, CardGroup, CardImage } from "../Card";
import { Button } from "../Button";
import React from "react";

export const ExCardStatic = () =>{


  return (
 <CardGroup className="h-max items-center z-22 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 my-20 mt-0 mx-auto left-0 right-0 sm:p-5  sm:w-full md:drop-shadow-none sm:drop-shadow-lg md:p-10 md:w-11/12">
      <CardImage src='/survey-biodibersitas-crop.png' className='gridcol-span-1  md:sm-0 h-[330px]' imageClassName={'object-cover objet-bottom'} alt={''} />
          <Card className="grid h-full rounded-none  sm:mb-10 md:mb-0 col-span-1 align-middle text-primary-400">
               <CardBody className="flex align-middle h-full items-center align-center bg-[#F3F5F8] m-10">
                                                  <div className="w-full sm:pt-5  rounded-0">
                                                      <div>
                                                          <h3 className="text-black w-full text-center m-0 text-base font-extrabold">SURVEI BIODIVERSITAS</h3>
                                                          {/* <p className="text-black text-center m-0 max-w-xs mt-2 text-base sm:max-w-full">Hutan Kemuning,</p> */}
                                                      </div>
                                                      <div className="flex justify-center pt-5">
                                                          {/* <Link type="button" className="uppercase text-[#faa51a] uppercase font-bold px-4 py-2 hover:bg-[#faa51a] hover:text-white " href="/detail/site-projek" passHref={true}> */}
                                                              <Button href="/portofolio/survei-biodiversitas" variant="orange" >
                                                                   Read More
                                                              </Button>
                                                          {/* </Link> */}
                                                          {/* <Button className="self-auto bg-[#F3F5F8] text-[#faa51a] rounded-5 items-center mt-5">READ MORE</Button> */}
                                                          </div>
                                                  </div>

                                              </CardBody>
                                          </Card>
                                          <CardImage src='/manajemen-data-jawi.png' className='gridcol-span-1 h-64 sm:block md:hidden' imageClassName={' object-cover objet-bottom'} alt={''} />
                                          <Card className="grid h-full rounded-none  sm:mb-10 md:mb-0 col-span-1 align-middle text-primary-400">
                                              <CardBody className="flex align-middle h-full items-center align-center bg-[#F3F5F8] m-10">
                                                  <div className="w-full sm:pt-5  rounded-0">
                                                      <div>

                                                          <h3 className="text-black w-full text-center m-0 text-base font-extrabold">MANAJEMEN DATA</h3>
                                                          <p className="text-black text-center m-0 max-w-xs mt-2 text-base sm:max-w-full"></p>
                                                      </div>

                                                      <div className="flex justify-center pt-5">
                                                          {/* <Link type="button" className="uppercase text-[#faa51a] uppercase font-bold px-4 py-2 hover:bg-[#faa51a] hover:text-white " href="/detail/site-projek" passHref={true}> */}

                                                              <Button href="/portofolio/manajemen-data" variant="orange" >
                                                                   Read More
                                                              </Button>

                                                          {/* </Link> */}
                                                          {/* <Button className="self-auto bg-[#F3F5F8] text-[#faa51a] rounded-5 items-center mt-5">READ MORE</Button> */}
                                                          </div>

                                                  </div>

                                              </CardBody>
                                          </Card>
                                          <CardImage src='/manajemen-data-jawi.png' className='gridcol-span-1 h-64 sm:hidden md:block h-[330px]' imageClassName={' object-cover objet-bottom'} alt={''} />
                                          <CardImage src='/model-OU-17052023-1.jpg' className='gridcol-span-1 h-64 h-[330px]' imageClassName={'object-cover objet-bottom'} alt={''} />
                                          <Card className="grid h-full rounded-none  sm:mb-10 md:mb-0 col-span-1 align-middle text-primary-400">
                                              <CardBody className="flex align-middle h-full items-center align-center bg-[#F3F5F8] m-10">
                                                  <div className="w-full sm:pt-5  rounded-0">
                                                      <div>

                                                          <h3 className="text-black w-full text-center m-0 text-base font-extrabold">PPEMODELAN SPASIAL</h3>
                                                          <p className="text-black text-center m-0 max-w-xs mt-2 text-base sm:max-w-full"></p>
                                                      </div>

                                                      <div className="flex justify-center pt-5">
                                                          {/* <Link type="button" className="uppercase text-[#faa51a] uppercase font-bold px-4 py-2 hover:bg-[#faa51a] hover:text-white " href="/detail/site-projek" passHref={true}> */}

                                                              <Button href="/portofolio/pemetaan-dan-pemodelan-spasial" variant="orange" >
                                                                   Read More
                                                              </Button>

                                       </div>

                                                  </div>

                                              </CardBody>
                                          </Card>
                                          <CardImage src='/penyusunan-dokumen-pengelolaan-JAWI.png' className='gridcol-span-1 h-64 md:hidden sm:block' imageClassName={'object-cover objet-bottom'} alt={''} />
                                          <Card className="grid h-full rounded-none  sm:mb-10 md:mb-0 col-span-1 align-middle text-primary-400">
                                              <CardBody className="flex align-middle h-full items-center align-center bg-[#F3F5F8] m-10">
                                                  <div className="w-full sm:pt-5  rounded-0">
                                                      <div>

                                                          <h3 className="text-black w-full text-center m-0 text-base font-extrabold">PENYUSUNAN DOKUMEN PENGELOLAAN/ KEBIJAKAN</h3>
                                                          <p className="text-black text-center m-0 max-w-xs mt-2 text-base sm:max-w-full"></p>
                                                      </div>

                                                      <div className="flex justify-center pt-5">
                                                          {/* <Link type="button" className="uppercase text-[#faa51a] uppercase font-bold px-4 py-2 hover:bg-[#faa51a] hover:text-white " href="/detail/site-projek" passHref={true}> */}

                                                              <Button href="/portofolio/penyusunan-dokumen-pengelolaan-kebijakan" variant="orange" >
                                                                   Read More
                                                              </Button>

                                                          {/* </Link> */}
                                                          {/* <Button className="self-auto bg-[#F3F5F8] text-[#faa51a] rounded-5 items-center mt-5">READ MORE</Button> */}
                                                          </div>

                                                  </div>

                                              </CardBody>
                                          </Card>
                                          <CardImage src='/penyusunan-dokumen-pengelolaan-JAWI.png' className='gridcol-span-1 h-64 sm:hidden md:block h-[330px]' imageClassName={'object-cover objet-bottom'} alt={''} />
                                      </CardGroup>
  )}