import Category from "@/components/Category";
import React from "react";

const Layout = () => {
	const categories = [
		{ name: "News", slug: "news", description: "News curated by Daily Scoop Africa" },
		{ name: "Technology", slug: "tech", description: "Technology News curated by Daily Scoop Africa" },
		{ name: "Entertainment", slug: "entertainment", description: "Entertainment News curated by Daily Scoop Africa" },
	];

	return (
		<div>
			{ categories.map((category, index) => (
				<Category key={index} data={category} />
			))}
		</div>
	)
}

export default Layout;