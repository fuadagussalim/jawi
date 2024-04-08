import { CardGroup, Card, CardBody } from "../Card"
import YouTubePlayer from "../YoutubePlayer"
import { Button } from "@nextui-org/react"
export const SiteProjectOverview = ()=>{
    return (
        <>
         <CardGroup className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:mt-0 md:mt-20 mx-auto">
                  <div className="grid md:col-span-2 lg:col-span-2 aspect-video sm:col-span-1">
                    <YouTubePlayer id={"LBCGzeuQkHc"} />
                  </div>
                  {/* <VideoPlayer/> */}
                  <Card className="grid col-span-1 align-middle text-primary-900">
                    <CardBody className="flex align-middle items-center align-center h-full bg-[#F3F5F8]">
                      <div className="w-full items-center align-center py-auto">
                        <h3 className="text-black w-full text-center m-0 font-extrabold">
                          SITE PROJECT
                        </h3>
                        <p className="text-black text-center font-postbody m-0 max-w-xs mt-2 sm:max-w-full">
                          Hutan Kemuning,
                        </p>
                        <p className="text-black text-center font-postbody m-0 max-w-xs sm:max-w-full">
                          Temanggung,
                        </p>
                        <p className="text-black text-center font-postbody m-0 max-w-xs sm:max-w-full">
                          Jawa Tengah.
                        </p>
                        <div className="flex justify-center pt-5">
                          {/* <Button className="self-auto bg-black text-white rounded-5 items-center mt-5"> */}
                          {/* <Link type="button" className="text-white  font-bold bg-black px-10 py-3 hover:bg-[#faa51a] hover:text-black " href="/detail/site-projek" passHref={true}> */}

                          <Button
                            className="bg-orange font-semibold py-2 text-black hover:text-white sm:w-28 md:w-[150px]"
                            href="/portofolio/site-project-hutan-kemuning-temanggung-jawa-tengah"
                          >
                            Read More
                          </Button>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </CardGroup>
        </>
    )
}