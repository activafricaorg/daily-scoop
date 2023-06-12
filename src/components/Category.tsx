import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import categoryStyles from "@/styles/Category.module.scss";

interface ICategoryProp {
	currentCategory: string | undefined
}

const Category = ({ currentCategory = undefined }: ICategoryProp) => {
	const categories = [
		{ name: "News", slug: "news", image: "https://img.icons8.com/ios/250/FFFFFF/chat.png"},
		{ name: "Tech", slug: "tech", image: "https://img.icons8.com/ios/250/FFFFFF/rocket.png" },
		{ name: "Entertainment", slug: "entertainment", image: "https://img.icons8.com/ios/250/FFFFFF/champagne.png" },
		{ name: "Sports", slug: "sports", image: "https://img.icons8.com/ios/250/FFFFFF/football2.png"},
	];

	return (
		<ul className={`${categoryStyles.list}`}>
			<li className={`${categoryStyles.listItem}`}>
				<Link href={`/`} className={!currentCategory ? categoryStyles.active : ''}>
					<Image src="https://img.icons8.com/ios/250/FFFFFF/home.png" alt="Home" width={20} height={20}/>
					All
				</Link>
			</li>
			{ categories.map((category, index) => (
				<li key={index} className={`${categoryStyles.listItem}`}>
					<Link href={`/category/${category.slug}`} className={category.slug == currentCategory ? categoryStyles.active : ''}>
						<Image src={category.image} alt={category.name} width={20} height={20}/>
						{category.name}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default Category;