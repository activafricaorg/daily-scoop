import Head from 'next/head';
import Layout from "@/components/Layout";
import React, { useState, useEffect } from "react";
import utilityStyles from "@/styles/Utility.module.scss";
import Article from "@/components/Article";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(`${process.env.SERVER_HOST}/article`);
    const articles = await res.json()
    return { props: { articles } }
}
export default function Home({ articles }) {
    return (
        <Layout>
            <Head>
                <title>Daily Scoop Africa`</title>
                <meta name="description" content="Daily scoop of entertainment, business, technology, and sport news" />
            </Head>
            <div className={`${utilityStyles.grid} ${utilityStyles.gridContent}`}>
                {
                    articles
                        .map((article, index) => (
                            <Article
                                key={index}
                                title={article.title}
                                link={article.url}
                                image={article.image}
                                date={article.updatedAt}
                                source={ article.source }
                                sourceImage={article.sourceImage}
                            />
                        ))
                }
            </div>
        </Layout>
    )
}