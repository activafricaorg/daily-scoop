import { GetStaticPaths, GetStaticProps } from "next";
import { ArticleTypes } from "@/types/article";
import { IPublisherArticles } from "@/types/publisher";
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
		fallback: 'blocking'
	}
}

export const getStaticProps: GetStaticProps = async({ params }) => {
	let slug = params?.slug;
	if (slug && typeof slug == "string") {
		slug = slug.split("-");
		if (slug.length > 1) slug = slug.join("+");

		const res = await fetch(`${process.env.SERVER_HOST}/publisher?search=${slug}`);
		const publisher: IPublisherArticles[] = await res.json();
		return {props: { publisher }}
	}

	return { notFound: true }
}

const Page = (props: { publisher: IPublisherArticles[] }) => {
	return (
		<Layout>
			<Head>
				<title>{ props.publisher[0].name } | Daily Scoop Africa</title>
				<meta name="description" content="Daily scoop of entertainment, business, technology, and sport news" />
			</Head>
			<section>
				<div className="mainHeading">
					<h2>Most recent articles from <Link target="_blank" href={ `https://${props.publisher[0].url}` }>{ props.publisher[0].name }</Link>.</h2>
				</div>
				<div className={`${UtilityStyles.grid}`}>
					<ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}} >
						<Masonry gutter={"10px"}>
							{
								props.publisher[0].articles
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