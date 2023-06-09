import Link from "next/link";
import Image from "next/image";
import ArticleStyles from "@/styles/Article.module.scss";
import UtilityStyles from "@/styles/Utility.module.scss"
import { Mallory} from "@/components/Fonts";

interface ArticlePropTypes {
	title: string,
	link: string,
	image: string,
	date: string,
	time: string,
	source: string
}

const Article = ({title, link, image, date, time, source}: ArticlePropTypes) => {
	return (
		<div className={ArticleStyles.singleArticle}>
			<Link href={link}>
				<div className={ArticleStyles.imagePlaceholder}>
					<Image fill src={image} alt={title} sizes="100vw" loading="lazy" />
				</div>
				<div className={ArticleStyles.details}>
					<h3 className={ArticleStyles.title}>{title}</h3>
					<div className={ArticleStyles.meta}>
						<div className={ArticleStyles.source}>
							{`${source}`}
						</div>
						<div className={`dateTime ${ArticleStyles.dateTime}`}>
							{`${date}`}
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default Article;