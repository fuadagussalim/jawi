import XIcon from "../Icons/XIcon"


export const SocialMedia = ({SocialMediaUrls})=>{
    return (
        <>
        <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                                    transition-opacity duration-300">
                                                    {/* <!-- LinkedIn --> */}
                                                    {SocialMediaUrls.linkedIn && (
                                                        <a href={SocialMediaUrls.linkedIn} target='_blank' className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                                            <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                                                        </a>
                                                    )}

                                                      {/* <!-- X --> */}

                                                     {SocialMediaUrls.x && (
                                                        <a href={SocialMediaUrls.x} target='_blank' className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                                        {/* <i className="mdi mdi-x text-blue-300 mx-auto mt-2"></i> */}
                                                           <XIcon width={12} className={'mx-auto'}/>
                                                        </a>
                                                    )}
                                     

                                                    {/* <!-- Facebook --> */}
                                                    {SocialMediaUrls.facebook && (
                                                        <a href={SocialMediaUrls.facebook} target='_blank' className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                                            <i className="mdi mdi-facebook text-indigo-400 mx-auto mt-2"></i>
                                                        </a>
                                                    )}
                                                    {/* <!-- Youtube --> */}
                                                    {SocialMediaUrls.youtube && (
                                                        <a href={SocialMediaUrls.youtube} target='_blank' className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                                            <i className="mdi mdi-youtube text-indigo-400 mx-auto mt-2"></i>
                                                        </a>
                                                    )}

                                                    {/* <!-- Instagram --> */}
                                                    {SocialMediaUrls.instagram && (
                                                        <a href={SocialMediaUrls.instagram} target='_blank' className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                                        </a>
                                                    )}
                                                </div>
        </>
    )
}