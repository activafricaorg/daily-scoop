import Link from "next/link";
import Image from "next/image";
import ArticleStyles from "@/styles/Article.module.scss";
import UtilityStyles from "@/styles/Utility.module.scss"

interface ArticlePropTypes {
	title: string,
	link: string,
	image: string,
	date: string,
	time: string
}

const Article = ({title, link, image, date, time}: ArticlePropTypes) => {
	return (
		<Link href={link} className={`${UtilityStyles.grid} ${UtilityStyles.gridArticle}`}>
			<Image src={image} alt={title} width={160} height={90} />
			<div>
				<h3 className={ArticleStyles.title}>{title}</h3>
				<div className={ArticleStyles.dateTime}>{`${date} ${time}`}</div>
			</div>
		</Link>
	)
}

export default Article;