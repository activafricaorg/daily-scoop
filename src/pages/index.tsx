import Head from 'next/head';
import Layout from "@/components/Layout";
import styles from '@/styles/Home.module.scss';
import React from "react";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Daily Scoop Africa</title>
                <meta name="description" content="Daily scoop of entertainment, business, technology, and sport news" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </Layout>
    )
}