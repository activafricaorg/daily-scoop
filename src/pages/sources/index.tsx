import { GetStaticProps } from "next";
import { PublisherTypes } from "@/types/publisher";
import UtilityStyles from "@/styles/Utility.module.scss";
import Head from "next/head";
import Layout from "@/components/Layout";
import Publisher from "@/components/Publisher";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async() => {
	const res = await fetch(`${process.env.SERVER_HOST}/publisher`);
	const publishers: PublisherTypes[] = await res.json();
	return {props: { publishers }}
}

const Page = (props: {publishers: PublisherTypes[]}) => {
	return (
		<Layout>
			<Head>
				<title>Publishers | Daily Scoop Africa</title>
				<meta name="description" content="Daily scoop of entertainment, business, technology, and sport news" />
			</Head>
			<section>
				<div className="mainHeading">
					<h2>All curated publishers</h2>
				</div>
				<div className={`${UtilityStyles.grid}`}>
					<ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 3, 900: 5}} >
						<Masonry gutter={"10px"}>
							{
								props.publishers
									.map((publisher: PublisherTypes, index) => {
										return <Publisher key={index} data={publisher} />
									})
							}
						</Masonry>
					</ResponsiveMasonry>
				</div>
				<div className="contentSection">
					<h3>Want to get listed on Daily Scoop Africa?</h3>
					<p>A title element received an <em>array with more than 1</em> element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering</p>
				</div>
			</section>
		</Layout>
	)
}

export default Page;