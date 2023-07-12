import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { CategoryArticlesTypes } from "@/types/category";
import { ArticleTypes } from "@/types/article";
import UtilityStyles from "@/styles/Utility.module.scss";
import Head from "next/head";
import Layout from "@/components/Layout";
import Article from "@/components/Article";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from "next/link";

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [
			{
				params: {
					slug: 'slug',
				},
			},
		],
		fallback: 'blocking',
	}
}

export const getStaticProps: GetStaticProps = async({ params }) => {
	console.log(params);
	const res = await fetch(`${process.env.SERVER_HOST}/category/${params?.slug}`);
	const category: CategoryArticlesTypes = await res.json();
	return {props: { category }}
}

const Page = (props: {category: CategoryArticlesTypes}) => {
	const articles: ArticleTypes[] = props.category.articles;

	return (
		<Layout>
			<Head>
				<title>{props.category.name} | Daily Scoop Africa</title>
				<meta name="description" content="Daily scoop of entertainment, business, technology, and sport news" />
			</Head>
			<section>
				<div className="mainHeading">
					<h2>{props.category.name} articles from <Link href="/">multiple sources</Link> across Africa.</h2>
				</div>
				<div className={`${UtilityStyles.grid}`}>
					<ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}} >
						<Masonry gutter={"10px"}>
							{
								articles
									.map((article: ArticleTypes, index) => {
										return <Article isCategory={true} key={index} data={article} />
									})
							}
						</Masonry>
					</ResponsiveMasonry>
				</div>
			</section>
		</Layout>
	)
}

export default Page;