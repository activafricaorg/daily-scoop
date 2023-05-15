import Head from 'next/head';
import Layout from "@/components/Layout";
import styles from '@/styles/Home.module.scss';

export default function Home() {
    return (
        <>
            <Head>
                <title>Daily Scoop Africa</title>
                <meta name="description" content="Daily scoop of entertainment, business, technology, and sport news" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <header>
                    <h1>Daily Scoop</h1>
                </header>
                <Layout />
            </main>
        </>
    )
}