import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import categoryStyles from "@/styles/Category.module.scss";

const Category = (props: {currentCategory: string | undefined}) => {
	const categories = [
		{ name: "News", slug: "news", image: "https://img.icons8.com/ios/250/FFFFFF/chat.png"},
		{ name: "Tech", slug: "tech", image: "https://img.icons8.com/ios/250/FFFFFF/rocket.png" },
		{ name: "Entertainment", slug: "entertainment", image: "https://img.icons8.com/ios/250/FFFFFF/champagne.png" },
		{ name: "Sports", slug: "sports", image: "https://img.icons8.com/ios/250/FFFFFF/football2.png"},
	];

	return (
		<ul className={`${categoryStyles.list}`}>
			<li className={`${categoryStyles.listItem}`}>
				<Link href={`/`} className={!props.currentCategory ? categoryStyles.active : ''}>
					<Image src="https://img.icons8.com/ios/250/FFFFFF/home.png" alt="Home" width={20} height={20}/>
					All
				</Link>
			</li>
			{ categories.map((category, index) => (
				<li key={index} className={`${categoryStyles.listItem}`}>
					<Link href={`/category/${category.slug}`} className={category.slug == props.currentCategory ? categoryStyles.active : ''}>
						<Image src={category.image} alt={category.name} width={20} height={20}/>
						{category.name}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default Category;