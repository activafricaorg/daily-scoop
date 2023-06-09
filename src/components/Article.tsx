import Link from "next/link";
import moment from "moment";
import ArticleStyles from "@/styles/Article.module.scss";
import Image from "next/image";

interface ArticlePropTypes {
	title: string,
	link: string,
	image: string,
	date: string,
	source: string
	sourceImage: string,
}

const Article = ({title, link, image, date, source, sourceImage}: ArticlePropTypes) => {
	const publisherLogo = sourceImage.split("http").length > 1 ? sourceImage : `${sourceImage}`;
	const realDate = moment(date).format('YYYY-MM-DD');

	return (
		<div className={ArticleStyles.singleArticle}>
			<Link href={link} target="_blank">
				<div className={ArticleStyles.imagePlaceholder} style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}/>
				<div className={ArticleStyles.details}>
					<h3 className={ArticleStyles.title}>{title}</h3>
					<div className={ArticleStyles.meta}>
						<div className={ArticleStyles.source}>
							<Image className={ArticleStyles.sourceImage} src={publisherLogo} width={20} height={20} alt={source} />
							{source}
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