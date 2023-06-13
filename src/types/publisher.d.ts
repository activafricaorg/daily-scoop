import {TArticle} from "@/types/article";

export type TPublisher = {
	name: string,
	url: string,
	image: string
}

export interface TPublisherArticles extends TPublisher {
	articles: TArticle[]
}