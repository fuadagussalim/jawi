import { SectionContainer } from "../Section";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup } from "../Button";
import { Icon } from "@iconify/react";
import { Card, CardGroup, CardBody, CardHeader, CardImage } from "../Card";

// import ImageContent from "../ContentImage"
const DATA = [
    {
        title: "Navigasi",
        items: [
            {
                label: "Services",
                href: "#services"
            },
            {
                label: "Portofolio",
                href: "#portofolio"
            },
            {
                label: "Portofolio",
                href: "#portofolio"
            },
            {
                label: "FAQ",
                href: "#faq"
            }
        ]
    },
    {
        title: "Company",
        items: [
            {
                label: "About",
                href: "https://github.com/christian-luntok/",
                target: "_blank"
            },
            {
                label: "Twitter",
                href: "https://github.com/christian-luntok/",
                target: "_blank"
            },
            {
                label: "Instagram",
                href: "https://github.com/christian-luntok/",
                target: "_blank"
            },
            {
                label: "Facebook",
                href: "https://github.com/christian-luntok/",
                target: "_blank"
            }
        ]
    }
];

export const Footer = (className = { className }) => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer id="footer" className={`${className}grid-cols-2 bg-black w-full lg:grid-cols-3`} >
            {/* Footer Links */}

            <SectionContainer className="flex footer--container wrap lg:grid-cols-3  relative z-10">
                <div className="grid container col-span-1 pt-20">
                    <Link href="/">
                        <Image
                            src="/Logo Jawi Stroke Putih.png"
                            alt="logo"
                            className="h-20 w-auto"
                            height="100"
                            width="300"
                            priority
                        />
                    </Link>
                    <SectionContainer className="footer-credits relative z-10 b-[]">
                        <div className="wrap py-5 mb-20">
                            <p className="text-white my-0">
                                © {year} Javan Wildlife Institute (JAWI)
                                <span className="font-normal">
                                    {" "}
                                    <Link
                                        className="transition-colors duration-300 hover:underline"
                                        href="https://chrstnl.com"
                                        target="_blank"
                                    >

                                    </Link>
                                </span>
                            </p>
                        </div>
                    </SectionContainer>

                </div>

                

            </SectionContainer>
            <SectionContainer className="grid col-span-1">
                    <Card className="bg-black col-span-1 pt-0 rounded-none col-span-1 text-primary-900">
                        <CardBody className="flex w-full bg-black p-0 grid-cols-2">
                          
                          

                        </CardBody>

                    </Card>
                    <Card className="bg-black col-span-1 pt-0 rounded-none col-span-1 text-primary-900">
                        <CardBody className="flex bg-black gap-2 p-2 grid-cols-2">
                        <p className="mr-10 col-span-1 text-white">
                                Social Media
                            </p>
                        <Image
                                className="grid col-span-1"
                                src="/sosmed/fb w.png"
                                height={40}
                                width={40}>

                            </Image>
                            <Image
                                src="/sosmed/link w.png"
                                height={40}
                                width={40}>

                            </Image>
                            <Image
                                src="/sosmed/fb w.png"
                                height={40}
                                width={40}>

                            </Image>
                            <Image
                                src="/sosmed/yt w.png"
                                height={40}
                                width={40}>

                            </Image>

                          

                        </CardBody>

                    </Card>
                    <hr/>
                    <p>
                       oijfoiajfoaijfoiafjie
                    </p>
                </SectionContainer>



        </footer>
    );
};
