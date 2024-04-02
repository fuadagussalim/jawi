import { SectionContainer } from "../Section/index";
import { Icon } from "@iconify/react"
import { useState } from "react";
import { v4 as uuid } from "uuid";
import clsx from "clsx";
import {Image} from "@nextui-org/react"
import Link from "next/link";
import { Button } from "../Button";

const accordionDataDefault = [
    {
        id: uuid(),
        title: "OUR MISSION",
        isOpen: true,
        content:
        <p className="text-justify min-h-[150px]  pr-10 ">Mengarusutamakan sains konservasi yang inklusif di Indonesia</p>,
        image: "/DSC00013_11zon-1024x768.jpg",
        slug: "",

    },
    {
        id: uuid(),
        title: "OUR STORY?",
        isOpen: false,
        content:
            <div></div>,
        image: "/DSC00013_11zon-1024x768.jpg",
        slug: "",
    },
    {
        id: uuid(),
        title: "OUR PROGRAM",
        isOpen: false,
        content: <div></div>,
        image: "/DSC00013_11zon-1024x768.jpg",
        slug: "",
    },
    {
        id: uuid(),
        title: "TEAM",
        isOpen: false,
        content:
            <div></div>,
        image: "/DSC00013_11zon-1024x768.jpg",
        slug: "",
    }
];

const accordionItemType = {
    top: "rounded-t-lg",
    default: "border rounded-none border-t-0",
    bottom: "border border-t-0 rounded-b-lg"
};

// { accordionData={ accordionData}}
export const TemporaryAcc = ({ accordionDataParam = accordionDataDefault }) => {
    // console.log('UUID apa sih: ', accordionDataParam[0].id)
    const [activeAccordion, setActiveAccordion] = useState(null);

    const accordionClickHandle = (id) => {
        setActiveAccordion(id === activeAccordion ? null : id);
    };

    const accordionData = accordionDataParam;




    return (
        <SectionContainer className="accordion--container my-16 mt-0 drop-shadow-xl md:w-[700px]  md:mx-auto offset-y-0 ">
            {accordionData.map((accordionItem, index) => (
                <div
                    key={accordionItem.id}
                    id={accordionItem.id}
                    className={clsx(
                        "accordion-item--container border border-neutral-200 bg-white overflow-hidden",
                        {
                            [accordionItemType.top]: index === 0,
                            [accordionItemType.default]:
                                index > 0 && index < accordionData.length - 1,
                            [accordionItemType.bottom]:
                                index === accordionData.length - 1
                        }
                    )}
                >
                    <h2 className="accordion-item--heading mb-0">
                        <button
                            className="group relative flex w-full font-semibold items-center rounded-t-lg border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition"
                            type="button"
                            aria-expanded={accordionItem.isOpen}
                            onClick={() =>
                                accordionClickHandle(accordionItem.id)
                            }
                        >
                            {accordionItem.title}
                            <Icon
                                icon="material-symbols:keyboard-arrow-up-rounded"
                                className="ml-auto h-8 w-8 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out motion-reduce:transition-none"
                            />
                        </button>
                    </h2>
                    <div
                        className={clsx(
                            "accordion-item--content py-4 px-5 text-base w-full",
                            {
                                hidden: activeAccordion !== accordionItem.id, // Use hidden class to animate height to 0
                                "!visibility block":
                                    activeAccordion === accordionItem.id // Use block class to show content again
                            }
                        )}
                    >
                        <div>
                            {/* <Link href={`/service/${accordionItem.slug}`}> */}
                                <Image src={accordionItem.image} width={4000} height={3000} className="w-full pb-5">

                                </Image>
                            {/* </Link> */}
                            {/* {accordionItem.content} */}
                            <div className="text-justify" dangerouslySetInnerHTML={{ __html: accordionItem.content }}>

                            </div>
                            
                        </div>
                        {/* <div className="mx-auto flex justify-center pt-5">

                            <Button variant="orange" className=" w-[150px]" href={`/service/${accordionItem.slug}`}>

                                Read More
                            </Button>
                        </div> */}
                    </div>

                </div>
            ))}
        </SectionContainer>
    );
};
