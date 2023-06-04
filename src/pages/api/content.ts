import Parser from 'rss-parser';
import * as cheerio from "cheerio"
import {getHTML} from "@/pages/api/helpers";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string
}

// interface cheerioType extends cheerio.CheerioAPI {
//   fromUrl(url: string): boolean
// }

// type CustomFeed = {foo: string};
// type CustomItem = {bar: number}

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  getHTML("techcabal.com", "/2023/06/03/nigerian-start-up-nearpays-wins-coveted-fintech-prize-at-gitex-africa/")
      .then((html) => {
        const $ = cheerio.load(html);
        console.log($('title').text());
      })
      .catch((err) => console.log(err));
  // const $ = cheerio.load('https://google.com');
  // console.log($);
  // console.log($('title').json());
  // const parser: Parser<CustomFeed, CustomItem> = new Parser({
  //   customFields: {
  //     feed: ['foo'],
  //     item: ['bar']
  //   }
  // });

  // const feed = await parser.parseURL('https://notjustok.com/category/news/feed/');
  // console.log(feed.title);
  // console.log(feed.title); // feed will have a `foo` property, type as a string

  // feed.items.forEach(item => {
  //   console.log(item.link) // item will have a `bar` property type as a number
  // });

  res.status(200).json({ name: 'John Doe' });
}
