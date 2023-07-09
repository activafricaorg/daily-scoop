import Image from "next/image";
import { CategoryArticlesTypes } from "@/types/category";
import { ArticleTypes } from "@/types/article";
import SectionStyles from "@/styles/Section.module.scss";
import UtilityStyles from "@/styles/Utility.module.scss";
import Article from "@/components/Article";
import Link from "next/link";

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
			<Link href={`/category/${props.category.slug}`} className={SectionStyles.moreLink}>
				More {props.category.name}
			</Link>
		</section>
	)
}

export default Section;