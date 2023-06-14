import React from "react";
import utilityStyles from "@/styles/Utility.module.scss";
import Head from 'next/head';
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import type {GetStaticProps} from "next";
import {CategoryArticlesTypes} from "@/types/category";

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(`${process.env.SERVER_HOST}/article`);
    const categories: CategoryArticlesTypes[] = await res.json();
    return {props: {categories}}
}
const Home = (props: {categories: CategoryArticlesTypes[]}) => {
    return (
        <Layout>
            <Head>
                <title>Daily Scoop Africa`</title>
                <meta name="description" content="Daily scoop of entertainment, business, technology, and sport news" />
            </Head>
            <>
                {
                    props.categories
                        .map((category: CategoryArticlesTypes, index: number) => (
                            <Section key={index} category={category} />
                        ))
                }
            </>
        </Layout>
    )
}

export default Home;