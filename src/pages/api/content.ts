import Parser from 'rss-parser';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string
}

type CustomFeed = {foo: string};
type CustomItem = {bar: number}

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  // const parser: Parser<CustomFeed, CustomItem> = new Parser({
  //   customFields: {
  //     feed: ['foo'],
  //     item: ['bar']
  //   }
  // });

  // const feed = await parser.parseURL('https://notjustok.com/category/news/feed/');
  // console.log(feed.title);
  // console.log(feed.title); // feed will have a `foo` property, type as a string
  //
  // feed.items.forEach(item => {
  //   console.log(item.content) // item will have a `bar` property type as a number
  // });

  res.status(200).json({ name: 'John Doe' })
}
