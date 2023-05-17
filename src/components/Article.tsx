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
	time: string
}

const Article = ({title, link, image, date, time}: ArticlePropTypes) => {
	return (
		<div className={ArticleStyles.singleArticle}>
			<Link href={link}>
				{/*<Image src={image} alt={title} width={160} height={90} />*/}
				<div className={ArticleStyles.imagePlaceholder}>
					<Image fill src={image} alt={title} sizes="100vw" loading="lazy" />
				</div>
				<h3 className={ArticleStyles.title}>{title}</h3>
				<div className={`dateTime ${ArticleStyles.dateTime}`}>
					{`${date}`}
					<style jsx global>{`.dateTime { font-family: ${Mallory.style.fontFamily}; font-weight: 400}`}</style>
				</div>
			</Link>
		</div>
	)
}

export default Article;