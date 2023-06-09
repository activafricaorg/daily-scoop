import React from "react";
import utilityStyles from "@/styles/Utility.module.scss";
import categoryStyles from "@/styles/Category.module.scss";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Head from "next/head";
import Article from "@/components/Article";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [
			{
				params: {
					slug: 'slug',
				},
			},
		],
		fallback: true,
	}
}

export const getStaticProps: GetStaticProps = async({ params }) => {
	const res = await fetch(`${process.env.SERVER_HOST}/category/${params?.slug}`);
	const category = await res.json();
	return { props: { category } }
}

const Page = ({ category }) => {
	return (
		<Layout>
			<Head>
				<title>Daily Scoop Africa</title>
				<meta name="description" content="Daily scoop of entertainment, business, technology, and sport news" />
			</Head>
			<div className={ categoryStyles.title }>
				<h1>{category?.name}</h1>
				<p>{category?.description}</p>
			</div>
			<div className={`${utilityStyles.grid} ${utilityStyles.gridContent}`}>
				{
					category?.articles
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

export default Page;