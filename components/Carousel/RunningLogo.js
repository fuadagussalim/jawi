import Marquee from "react-fast-marquee";
import LogoCarousel from "../Sponsor/LogoCarousel"
import React from "react";

const RunningLogo = ({logos}) => {
  return (
  <Marquee>
     <LogoCarousel logos={logos} />
   
  </Marquee>)

}

export default RunningLogo;