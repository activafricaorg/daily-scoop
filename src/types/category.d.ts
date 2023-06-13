import {TPublisher} from "@/types/publisher";
import {TArticle} from "@/types/article";

export type TCategory = {
	name: string,
	slug: string,
	description: string,
	publishers: TPublisher[],
}

export interface ICategoryArticles extends TCategory {
	articles: TArticle[]
}