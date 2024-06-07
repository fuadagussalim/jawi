'use client'
import { CardGroup, CardBody, Card, CardHeader, CardImage } from "../Card"
import Link from "next/link"
export const AboutOverview = ({previewTexts})=>{
  console.log("Preview text: ", previewTexts.previewLink1)
    return (
        <>
          <CardGroup className=" sm:grid-cols-1 md:grid-cols-2  divide-y  divide-black-100">
                  <Link href={previewTexts.mainPreviewLink}>
                    <Card className="align-baseline h-full col-span-1 md:text-primary-900  bg-[#F3F5F8]">
                      <CardBody className="sm:w-full md:my-auto h-full mx-auto bg-[#F3F5F8] p-12">
                        <div className="flex flex-col shadow-xl  p-10 md:px-20 pr-10 max-w-[600px] mx-auto h-full px-auto justify-center content-center align-center">
                          <h3 className="text-black uppercase sm:text-sm md:text-3xl sm:text-center sm:px-auto text-justify md:text-left mb-3 sm:font-bold md:font-bold sm:font-bold my-0">
                            {/* ABOUT JAWI */}
                            {previewTexts.mainPreviewHead??"ABOUT JAWI"}
                          </h3>
                          <p className="text-black sm:text-xs inline  font-postbody md:text-base md:w-full mx-auto  text-justify hover:text-black-200 max-w-xs sm:max-w-full">
                            {" "}
                            {previewTexts.mainPreview??"Organisasi non-profit di bidang konservasi sumber daya alam ingin membangkitkan kembali budaya hidupharmoni antara manusia, alam dan satwa liar di PulauJawa. Kerjasama dapat dilakukan denganinstansi/pihak lain dalam rangka kegiatan yangmemiliki arah serupa dengan ranah gerak dan visimisi organisasi kami, dan tidak terbatas hanya diPulau Jawa."}
         
                            <span className="text-black-200">{" >>"}</span>{" "}
                          </p>
                        </div>
                      </CardBody>
                    </Card>
                  </Link>

                  <div className="p-10 py-auto sm:pl-10 md:pl-0 ">
                    <table className="grid col-span-1 h-full ">
                      <tbody className="max-w-[600px]  ">
                        <tr>
                          <th className="w-[300px] pb-0">
                            <Link href={previewTexts.previewLink1}>
                              <h5 className="sm:text-center sm:text-xs md:text-xl md:text-left pb-2 text-orange  mb-0 my-5">
                                {previewTexts.previewHead1??"PROGRAM"}{" "}
                                <span className="text-[#808080] text-xs  align-middle h-full">
                                  {">"}
                                </span>
                              </h5>
                            </Link>
                          </th>
                          <th className="w-[300px] pb-0">
                            <Link href={previewTexts.previewLink2}>
                              <h5 className="sm:text-center sm:text-xs md:text-xl md:text-left pb-2 text-orange  mb-0 my-5">
                                 {previewTexts.previewHead2??"OUR STORY"}{" "}
                                <span className="text-[#808080] text-xs  align-middle h-full">
                                  {">"}
                                </span>
                              </h5>
                            </Link>
                          </th>
                        </tr>
                        <tr>
                          <td className="">
                            <Link href={previewTexts.previewLink1}>
                              <p className="text-justify hidden md:block sm:min-h-[20px] md:min-h-[50px] font-postbody hover:text-[#808080] sm:text-xs md:text-sm  pr-10">
                                {previewTexts.previewText1??"Menciptakan keselarasan antara manusia, alam, dan satwa liar melalui penerapan ilmu pengetahuan dan teknologi ..."}
                              </p>
                            </Link>
                            {/* <Button href="/about" variant="orange"  className="mt-5 bg-orange text-black hover:text-white mt-0">See Our Program</Button> */}
                          </td>
                          <td className="">
                            <Link href={previewTexts.previewLink2}>
                              <p className="text-justify hidden md:block sm:min-h-[20px] md:min-h-[50px] font-postbody hover:text-[#808080] sm:text-xs  md:text-sm pr-10">
                                  {previewTexts.previewText2??"Pertumbuhan demografi yang semakin meningkat membuat persingungan antara aktivitas masyarak dengan habitat ..."}
                              </p>
                            </Link>

                            {/* <Button href="/about" variant="orange" className="mt-5 bg-orange text-black hover:text-white mt-0">See Our Story</Button> */}
                          </td>
                        </tr>
                        <tr>
                          <th className="w-[300px] sm:pr-0 md:pr-10  pb-0">
                            <hr className="mt-5 h-px my-8 bg-black-100 border-0 dark:bg-gray-700"></hr>
                            <Link href={previewTexts.previewLink3}>
                              <h5 className="sm:text-center sm:text-xs md:text-xl md:text-left  pb-2 text-orange  mb-0 my-5">
                                {previewTexts.previewHead3??"MISSION"}{" "}
                                <span className="text-[#808080] text-xs  align-middle h-full">
                                  {">"}
                                </span>
                              </h5>
                            </Link>
                          </th>
                          <th className="w-[300px]  sm:pr-0 md:pr-10 pb-0">
                            <hr className="mt-5 h-px my-8 bg-black-100 border-0 dark:bg-gray-700"></hr>
                            <Link href={previewTexts.previewLink4}>
                              <h5 className="sm:text-center sm:text-xs md:text-xl md:text-left  pb-2 text-orange  mb-0 my-5">
                                {previewTexts.previewHead4??"TEAM"}{" "}
                                <span className="text-[#808080] text-xs  align-middle h-full">
                                  {">"}
                                </span>
                              </h5>
                            </Link>
                          </th>
                        </tr>
                        <tr>
                          <td className="align-top ">
                            <Link href={previewTexts.previewLink3}>
                              <p className="text-justify hidden md:block sm:min-h-[20px] md:min-h-[50px]  hover:text-[#808080] font-postbody sm:text-xs  md:text-sm pr-10">
                                     {previewTexts.previewText3??"Bekerja untuk menjamin masa depan keanekaragaman"}          
                              </p>
                            </Link>

                          </td>
                          <td>
                            <Link
                              className="font-postbody"
                              href={previewTexts.previewLink4}
                            >
                              <p className=" sm:text-xs md:text-sm text-justify hidden md:block pr-10 hover:text-[#808080]">
                                 {previewTexts.previewText4??"Tim jawi tersusun atas peneliti dari berbagai disiplin ilmu yang kompeten dan berpengalaman pada bidangnya. "}      
                              </p>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardGroup>
        </>
    )
}