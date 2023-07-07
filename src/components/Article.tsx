import Link from "next/link";
import moment from "moment";
import ArticleStyles from "@/styles/Article.module.scss";
import { ArticleTypes } from "@/types/article";

const Article = (props: { key: number, data: ArticleTypes }) => {
	const realDate = moment(props.data.articleDate).format('lll');
	let title = (props.data.title).split("|").length > 1 ? (props.data.title).split("|")[0] : (props.data.title);
	title = title.split(" --").length > 1 ? title.split(" --")[0] : title;
	title = title.split(" —").length > 1 ? title.split(" —")[0] : title;
	title = title.split(" –—").length > 1 ? title.split(" –—")[0] : title;

	return (
		<div className={ArticleStyles.singleArticle}>
			<Link href={props.data.url} target="_blank">
				<h3 className={ArticleStyles.title}>{title}</h3>
			</Link>
			<div className={`dateTime ${ArticleStyles.dateTime}`}>
				<div className={ArticleStyles.source}>{props.data.source}</div>
				{realDate}
				<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="bookmark"
				     className="svg-inline--fa fa-bookmark fa-w-12 fa-sm text-neutral-700 dark:text-primary-100 cursor-pointer"
				     role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
					<path fill="currentColor" d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm16 456.287l-160-93.333-160 93.333V48c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16v408.287z"></path>
				</svg>
			</div>
		</div>
	)
}

export default Article;