import Link from "next/link";
import moment from "moment";
import ArticleStyles from "@/styles/Article.module.scss";
import {ArticleTypes} from "@/types/article";

const Article = (props: {key: number, data: ArticleTypes}) => {
	const realDate = moment(props.data.articleDate).format('LLL');;

	return (
		<div className={ArticleStyles.singleArticle}>
			<Link href={props.data.url} target="_blank">
				<div className={ArticleStyles.imagePlaceholder} style={{ backgroundImage: `url(${props.data.image})`, backgroundSize: "cover" }}/>
				<div className={ArticleStyles.details}>
					<div className={ArticleStyles.source}>
						{props.data.source}
					</div>
					<h3 className={ArticleStyles.title}>{props.data.title}</h3>
					<div className={`dateTime ${ArticleStyles.dateTime}`}>
						{realDate}
					</div>
				</div>
			</Link>
		</div>
	)
}

export default Article;