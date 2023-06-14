import {ArticleTypes} from "@/types/article";

export type PublisherTypes = {
	name: string,
	url: string,
	image: string
}

export interface IPublisherArticles extends PublisherTypes {
	articles: ArticleTypes[]
}