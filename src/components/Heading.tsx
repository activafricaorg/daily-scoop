import React, {useState} from "react";
import Link from "next/link";

const Heading = () => {
	const [category, setCategory] = useState("news");
	const categories = [
		{ name: "News", slug: "news", description: "News curated by Daily Scoop Africa" },
		{ name: "Technology", slug: "tech", description: "Technology News curated by Daily Scoop Africa" },
		{ name: "Entertainment", slug: "entertainment", description: "Entertainment News curated by Daily Scoop Africa" },
		{ name: "Sports", slug: "entertainment", description: "Entertainment News curated by Daily Scoop Africa" },
	];

	return (
		<ul>
			{ categories.map((category, index) => (
				<li key={index}>
					<Link href={`/category/${category.slug}`}>{category.name}</Link>
				</li>
			))}
		</ul>
	)
}

export default Heading;