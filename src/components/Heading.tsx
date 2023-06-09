import Link from "next/link";
import React, { useState } from "react";
import headingStyles from "@/styles/Heading.module.scss";
import utilityStyles from "@/styles/Utility.module.scss";
import Image from "next/image";

const Heading = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const categories = [
		{ name: "News", slug: "/news", description: "News curated by Daily Scoop Africa", image: "https://img.icons8.com/ios/250/FFFFFF/chat.png"},
		{ name: "Tech", slug: "/tech", description: "Technology News curated by Daily Scoop Africa", image: "https://img.icons8.com/ios/250/FFFFFF/rocket.png" },
		{ name: "Entertainment", slug: "/entertainment", description: "Entertainment News curated by Daily Scoop Africa", image: "https://img.icons8.com/ios/250/FFFFFF/champagne.png" },
		{ name: "Sports", slug: "/sports", description: "Entertainment News curated by Daily Scoop Africa", image: "https://img.icons8.com/ios/250/FFFFFF/football2.png"},
	];

	return (
		<ul className={`${headingStyles.list}`}>
			<li className={`${headingStyles.listItem}`}>
				<Link href={`/`}>
					<Image src="https://img.icons8.com/ios/250/FFFFFF/home.png" alt="Home" width={20} height={20}/>
					All
				</Link>
			</li>
			{ categories.map((category, index) => (
				<li key={index} className={`${headingStyles.listItem}`}>
					<Link href={`/category${category.slug}`} className={category.name === selectedCategory ? headingStyles.active : ''}>
						<Image src={category.image} alt={category.name} width={20} height={20}/>
						{category.name}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default Heading;