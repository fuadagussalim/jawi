'use client'
import Head from "next/head";
import { BadgeMessage, BadgeGroup, BadgeIcon } from "../../components/Badge";
import { SectionContainer } from "../../components/Section";
import { PageTitle } from "../../components/Title";
import Layout from "../../components/layout";
import Typewriter from 'typewriter-effect';
import Image from "next/image";
import { OtherpageBanner } from "../../components/Banner";
import { Columns } from "../../components/Columns";
import { ContentImage } from "../../components/ContentImage";
import { Content } from "../../components/Content";
import { Accordion } from "../../components/Accordion";
import { MotionBTTContainer } from "../../components/Motion";
import {CardPost} from '../../components/Card/CardPosts'
import SEO from "../../components/SEO/SEO";

import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    CardInliner,
    Card
} from "../../components/Card";
// import '../../styles/globals.scss'
import Header from "../../components/header";

export default function ClientPage() {
    return (
        <Layout preview={""} className="">
            

            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20">
                <OtherpageBanner image='/Picture2-1.png' href="#header" maintext='Our Programs' typeAnimation={false} subtext='' maintextclass="text-center w-full" subtextclass="text-center w-full" align="center" motionClass="w-full" />
                <SectionContainer id="services" className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="header" className="feature-tabs">

                            <PageTitle className="text-center mx-auto font-black text-3xl px-auto mb-0 pt-10">
                                Javan Wildlife Institute Programs
                            </PageTitle>

                            <CardGroup>
                                <CardHeader className={"text-center align-middle font-black max-w-lg] mx-auto"} hasBadge={false} hasArrow={false}>
                                Menciptakan keselarasan antara manusia, alam, dan satwa liar melalui penerapan ilmu pengetahuan dan teknologi dengan berasaskan konservasi sumber daya alam dengan prinsip pembangunan yang berkelanjutan
                                </CardHeader>

                            </CardGroup>
                            {/* <CardPost title="Contoh" image="" subtitle="ini sub judul">

                            </CardPost> */}
                        </SectionContainer>
                    </MotionBTTContainer>

                </SectionContainer>
            </div>
        </Layout>
    );
}
