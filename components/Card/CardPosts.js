import { CardGroup, CardImage, CardHeader, CardBody } from "../Card"
export const CardPost = ({ title, subtitle, image }) => {
    return (
        <CardGroup className="p-10 grid grid-cols-5">
          
                <CardImage height="" src={image} width="" className={"grid col-span-1"} imageClassName={""} alt={""}>

                </CardImage>
                <div className="grid col-span-4 grid-rows-4">
                    <CardHeader className={"grid row-span-1"} hasBadge={false} hasArrow={false}>
                        {title}
                    </CardHeader>
                    <CardBody className={"grid row-span-3"}>
                        {subtitle}
                    </CardBody>


                </div>

         
        </CardGroup>
    )
}