import React from "react";
import utilityStyles from "@/styles/Utility.module.scss";
import Head from 'next/head';
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import type { GetStaticProps } from "next";
import {ICategoryArticles} from "@/types/category";

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(`${process.env.SERVER_HOST}/article`);
    const categories: ICategoryArticles[] = await res.json();
    return {props: {categories}}
}
export default function Home(props: {categories: ICategoryArticles[]}) {
    return (
        <Layout>
            <Head>
                <title>Daily Scoop Africa`</title>
                <meta name="description" content="Daily scoop of entertainment, business, technology, and sport news" />
            </Head>
            <>
                {
                    props.categories
                        .map((category: ICategoryArticles, index: number) => (
                            <Section key={index} category={category} />
                        ))
                }
            </>
        </Layout>
    )
}