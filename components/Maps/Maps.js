import { CardGroup } from "../Card"

export const GMaps = ({width, height}) => {
    
    return (

        <CardGroup className="grid content-center m-20 mx-auto p-10 w-full">
            {/* <Maps address={"Jawi (Javan Wildlife Institute"} /> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.7704356898225!2d110.35142947476626!3d-7.81410799220644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af61d0254a0db%3A0xc44af8788fff1217!2sJawi%20(Javan%20Wildlife%20Institute)!5e0!3m2!1sid!2sid!4v1711173804931!5m2!1sid!2sid" width={width} height={height}></iframe>
        </CardGroup>
    )
}


