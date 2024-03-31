import { SectionContainer } from "../Section";
import { Icon } from "@iconify/react";
import {Image} from "@nextui-org/react"
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "Sains Data Konservasi",
        content:
            "Data sains konservasi meliputi berbagai macam jenis data yang digunakan dalam upaya memahami, memprediksi, dan mengelola sumber daya alam dan ekosistem. Data sains konservasi dapat digunakan untuk membuat keputusan yang lebih baik dalam merencanakan, mengelola, dan memantau upaya konservasi, serta untuk memahami perubahan lingkungan dan dampaknya pada sumber daya alam dan ekosistem.",
        align: "right",
        image: "/data.jpg"
    },
    {
        id: uuid(),
        title: "Analisis Bisnis Konservasi",
        content:
            "Penerapan prinsip-prinsip bisnis dan analisis data untuk merancang dan mengelola program konservasi yang efektif dan berkelanjutan. Dalam program kerjanya, analis bisnis konservasi harus mempertimbangkan dri berbagai aspek seperti ekologi, sosial, dan kebijakan yang berweang dan berlaku dalam sektor bisnis tersebut.",
        align: "left",
        image: "/bisnis.webp"
    },
    {
        id: uuid(),
        title: "Analisis Media Konservasi",
        content:
            "Implementasi analisis media dan informasi terkait konservasi, baik media online maupun offline, digunakan dalam membantu meningkatkan kesadaran dan dukungan publik terhadap isu-isu konservasi. Analis media konservasi sangat penting dalam mempromosikan isu-isu konservasi dan memastikan bahwa informasi yang tersedia tentang konservasi akurat dan mudah dipahami oleh publik.",
        align: "right",
        image: "/media.webp"
    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={500}
                            height={500}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-m offset-y-0 offset-x-8 blur-16"
                        />
                    </div>
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
