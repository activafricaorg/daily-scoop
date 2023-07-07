import Link from "next/link";
import Image from "next/image";

const Category = (props: {currentCategory: string | undefined}) => {
	const categories = [
		{ name: "News", slug: "news", image: "https://img.icons8.com/ios/250/FFFFFF/chat.png"},
		{ name: "Tech", slug: "tech", image: "https://img.icons8.com/ios/250/FFFFFF/rocket.png" },
		{ name: "Entertainment", slug: "entertainment", image: "https://img.icons8.com/ios/250/FFFFFF/champagne.png" },
		{ name: "Sports", slug: "sports", image: "https://img.icons8.com/ios/250/FFFFFF/football2.png"},
	];

	return (
		<ul>
			<li>
				<Link href={`/`}>
					<Image src="https://img.icons8.com/ios/250/FFFFFF/home.png" alt="Home" width={20} height={20}/>
					All
				</Link>
			</li>
			{ categories.map((category, index) => (
				<li key={index}>
					<Link href={`/category/${category.slug}`}>
						<Image src={category.image} alt={category.name} width={20} height={20}/>
						{category.name}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default Category;