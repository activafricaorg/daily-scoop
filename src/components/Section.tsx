import {CategoryArticlesTypes} from "@/types/category";
import {ArticleTypes} from "@/types/article";
import Article from "@/components/Article";
import HeadingStyles from "@/styles/Heading.module.scss";
import UtilityStyles from "@/styles/Utility.module.scss";

const Section = (props: {key: number, category: CategoryArticlesTypes}) => {
	const articles: ArticleTypes[] = props.category.articles;

	return (
		<section className={`${HeadingStyles.container}`}>
			<h2 className={HeadingStyles.title}>
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