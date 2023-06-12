import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import ArticleStyles from "@/styles/Article.module.scss";

interface IArticleProp {
	title: string,
	link: string,
	image: string,
	date: string,
	source: string
	sourceImage: string,
}

const Article = ({title, link, image, date, source, sourceImage}: IArticleProp) => {
	// const publisherLogo = sourceImage.split("http").length > 1 ? sourceImage : `${sourceImage}`;
	const realDate = moment(date).format("MMM Do");

	return (
		<div className={ArticleStyles.singleArticle}>
			<Link href={link} target="_blank">
				<div className={ArticleStyles.imagePlaceholder} style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}/>
				<div className={ArticleStyles.details}>
					<h3 className={ArticleStyles.title}>{title}</h3>
					<div className={ArticleStyles.meta}>
						<div className={ArticleStyles.source}>
							<Image className={ArticleStyles.sourceImage} src="https://img.icons8.com/ios/250/FFFFFF/link.png" width={12} height={12} alt={source} />
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