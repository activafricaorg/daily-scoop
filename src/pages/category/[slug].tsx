import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import {CategoryArticlesTypes} from "@/types/category";
import Layout from "@/components/Layout";
import Head from "next/head";
import Section from "@/components/Section";

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
	return {props: { category }}
}

const Page = (props: {category: CategoryArticlesTypes}) => {
	return (
		<Layout>
			<Head>
				<title>Daily Scoop Africa`</title>
				<meta name="description" content="Daily scoop of entertainment, business, technology, and sport news" />
			</Head>
			<Section key={1} category={props.category} />
		</Layout>
	)
}

export default Page;