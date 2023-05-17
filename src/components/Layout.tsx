import Category from "@/components/Category";
import React from "react";

const Layout = () => {
	const categories = [
		{ name: "News", slug: "news", description: "News curated by Daily Scoop Africa" },
		{ name: "Technology", slug: "tech", description: "Technology News curated by Daily Scoop Africa" },
		{ name: "Entertainment", slug: "entertainment", description: "Entertainment News curated by Daily Scoop Africa" },
		{ name: "Sports", slug: "entertainment", description: "Entertainment News curated by Daily Scoop Africa" },
	];

	return (
		<>
			{ categories.map((category, index) => (
				<Category key={index} data={category} />
			))}
		</>
	)
}

export default Layout;