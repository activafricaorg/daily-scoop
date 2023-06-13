import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import ArticleStyles from "@/styles/Article.module.scss";
import {TArticle} from "@/types/article";

const Article = (props: {key: number, data: TArticle}) => {
	const realDate = moment(props.data.articleDate).format("MMM Do");

	return (
		<div className={ArticleStyles.singleArticle}>
			<Link href={props.data.url} target="_blank">
				<div className={ArticleStyles.imagePlaceholder} style={{ backgroundImage: `url(${props.data.image})`, backgroundSize: "cover" }}/>
				<div className={ArticleStyles.details}>
					<h3 className={ArticleStyles.title}>{props.data.title}</h3>
					<div className={ArticleStyles.meta}>
						<div className={ArticleStyles.source}>
							<Image className={ArticleStyles.sourceImage} src="https://img.icons8.com/ios/250/FFFFFF/link.png" width={12} height={12} alt={props.data.source} />
							{props.data.source}
						</div>
						<div className={`dateTime ${ArticleStyles.dateTime}`}>
							{realDate}
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default Article;