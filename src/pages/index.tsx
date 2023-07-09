import React from "react";
import Head from 'next/head';
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionStyles from "@/styles/Section.module.scss";
import UtilityStyles from "@/styles/Utility.module.scss";
import type { GetStaticProps } from "next";
import { CategoryArticlesTypes } from "@/types/category";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(`${process.env.SERVER_HOST}/article`);
    const categories: CategoryArticlesTypes[] = await res.json();
    return {props: {categories}}
}
const Home = (props: {categories: CategoryArticlesTypes[]}) => {
    return (
        <Layout>
            <Head>
                <title>Daily Scoop Africa</title>
                <meta name="description" content="Daily scoop of entertainment, business, technology, and sport news" />
            </Head>
            <>
                <div className="mainHeading">
                    <h2>Daily Scoop Africa helps you to track news, insights, and events from <Link href="/">multiple sources</Link> across Africa.</h2>
                </div>
                <div className={`${SectionStyles.container} ${UtilityStyles.grid}`}>
                    {
                        props.categories
                            .map((category: CategoryArticlesTypes, index: number) => (
                                <Section key={index} category={category} />
                            ))
                    }
                </div>
            </>
        </Layout>
    )
}

export default Home;