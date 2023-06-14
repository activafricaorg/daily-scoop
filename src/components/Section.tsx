import {CategoryArticlesTypes} from "@/types/category";
import {ArticleTypes} from "@/types/article";
import Article from "@/components/Article";
import HeadingStyles from "@/styles/Heading.module.scss";
import UtilityStyles from "@/styles/Utility.module.scss";
import Image from "next/image";

const Section = (props: {key: number, category: CategoryArticlesTypes}) => {
	const articles: ArticleTypes[] = props.category.articles;

	return (
		<section className={`${HeadingStyles.container}`}>
			<h2 className={HeadingStyles.title}>
				<Image src={props.category.image} alt={props.category.name} width={50} height={50} />
				{props.category.name}
			</h2>
			<div className={`${UtilityStyles.grid} ${UtilityStyles.gridMain}`}>
				{
					articles
						.map((article: ArticleTypes, index) => {
							return <Article key={index} data={article} />
						})
				}
			</div>
		</section>
	)
}

export default Section;