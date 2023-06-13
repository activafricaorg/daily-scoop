import {ICategoryArticles} from "@/types/category";
import {TArticle} from "@/types/article";
import Article from "@/components/Article";

const Section = (props: {key: number, category: ICategoryArticles}) => {
	const articles: TArticle[] = props.category.articles;

	return (
		<section>
			<h2>{props.category.name}</h2>
			{
				articles
					.map((article: TArticle, index) => (
						<Article key={index} data={article} />
					))
			}
		</section>
	)
}

export default Section;