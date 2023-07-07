import Image from "next/image";
import { CategoryArticlesTypes } from "@/types/category";
import { ArticleTypes } from "@/types/article";
import SectionStyles from "@/styles/Section.module.scss";
import UtilityStyles from "@/styles/Utility.module.scss";
import Article from "@/components/Article";

const Section = (props: {key: number, category: CategoryArticlesTypes}) => {
	const articles: ArticleTypes[] = props.category.articles;

	return (
		<section>
			<h2 className={SectionStyles.title}>
				<Image src={props.category.image} alt={props.category.name} width={20} height={20} /> {props.category.name}
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