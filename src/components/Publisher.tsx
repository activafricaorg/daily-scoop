import Link from "next/link";
import ArticleStyles from "@/styles/Article.module.scss";
import { PublisherTypes } from "@/types/publisher";

const Publisher = (props: { key: number, data: PublisherTypes }) => {
	let url = (props.data.url).split("/").length > 0
		? (props.data.url).split("/")[0]
		: (props.data.url);

	return (
		<div className={`${ArticleStyles.singleArticle} ${ArticleStyles.categoryArticle} ${ArticleStyles.publisherListing}`}>
			<Link href={props.data.url} target="_blank">
				<h3 className={ArticleStyles.title}>{props.data.name}</h3>
			</Link>
			<div className={`dateTime ${ArticleStyles.dateTime}`}>
				<div className={ArticleStyles.source}>{url}</div>
			</div>
		</div>
	)
}

export default Publisher;