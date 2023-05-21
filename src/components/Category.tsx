import Article from "@/components/Article";
import categoryStyles from "@/styles/Category.module.scss";
import utilityStyles from "@/styles/Utility.module.scss";
import Link from "next/link";

interface CategoryTypes {
	name: string,
	slug: string,
	description: string
}

interface CategoryPropTypes {
	data: CategoryTypes
}

const Category = ({ data }: CategoryPropTypes) => {
	return (
		<section className={`${categoryStyles.container}`}>
			<header className={categoryStyles.title}>
				<h2>
					<Link href={`/${data.slug}`}>{data.name}</Link>
				</h2>
			</header>
			<div className={`${utilityStyles.grid} ${utilityStyles.gridContent}`}>
				<Article
					title="Watch: Donald Trump, Anchor Kaitlan Collins Spar at CNN Town Hall"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-779867?width=640&height=360"
					date="5/11/2023"
					time="1:100AM"
					source="TechCabal"
				/>
				<Article
					title="Inside the Writers Strike: Negotiators Explain Where Talks Broke Down"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-772755?width=167&height=94"
					date="5/11/2023"
					time="1:100AM"
					source="Notjustok"
				/>
				<Article
					title="Watch: Cosmonauts Conduct Spacewalk Outside ISS"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-774468?width=167&height=94"
					date="5/11/2023"
					time="1:100AM"
					source="Reddit"
				/>
				<Article
					title="Title 42: What Its End Means for Immigration and the Southern Border"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-776973?width=167&height=94"
					date="5/11/2023"
					time="1:100AM"
					source="Bella Naija"
				/>
				<Article
					title="Pentagon to Send 1,500 Troops to Mexico Border as Title 42 Ends"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-779867?width=640&height=360"
					date="5/11/2023"
					time="1:100AM"
					source="Techcabal"
				/>
				<Article
					title="Pentagon to Send 1,500 Troops to Mexico Border as Title 42 Ends"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-779867?width=640&height=360"
					date="5/11/2023"
					time="1:100AM"
					source="Techcabal"
				/>
				<Article
					title="Watch: Donald Trump, Anchor Kaitlan Collins Spar at CNN Town Hall"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-779867?width=640&height=360"
					date="5/11/2023"
					time="1:100AM"
					source="Techcabal"
				/>
				<Article
					title="Inside the Writers Strike: Negotiators Explain Where Talks Broke Down"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-772755?width=167&height=94"
					date="5/11/2023"
					time="1:100AM"
					source="Techcabal"
				/>
				<Article
					title="Watch: Cosmonauts Conduct Spacewalk Outside ISS"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-774468?width=167&height=94"
					date="5/11/2023"
					time="1:100AM"
					source="Techcabal"
				/>
				<Article
					title="Title 42: What Its End Means for Immigration and the Southern Border"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-776973?width=167&height=94"
					date="5/11/2023"
					time="1:100AM"
					source="Techcabal"
				/>
				<Article
					title="Pentagon to Send 1,500 Troops to Mexico Border as Title 42 Ends"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-779867?width=640&height=360"
					date="5/11/2023"
					time="1:100AM"
					source="Techcabal"
				/>
				<Article
					title="Pentagon to Send 1,500 Troops to Mexico Border as Title 42 Ends"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-779867?width=640&height=360"
					date="5/11/2023"
					time="1:100AM"
					source="Techcabal"
				/>
				<Article
					title="Watch: Donald Trump, Anchor Kaitlan Collins Spar at CNN Town Hall"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-779867?width=640&height=360"
					date="5/11/2023"
					time="1:100AM"
					source="Techcabal"
				/>
				<Article
					title="Inside the Writers Strike: Negotiators Explain Where Talks Broke Down"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-772755?width=167&height=94"
					date="5/11/2023"
					time="1:100AM"
					source="Techcabal"
				/>
				<Article
					title="Watch: Cosmonauts Conduct Spacewalk Outside ISS"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-774468?width=167&height=94"
					date="5/11/2023"
					time="1:100AM"
					source="Techcabal"
				/>
				<Article
					title="Title 42: What Its End Means for Immigration and the Southern Border"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-776973?width=167&height=94"
					date="5/11/2023"
					time="1:100AM"
					source="Techcabal"
				/>
				<Article
					title="Pentagon to Send 1,500 Troops to Mexico Border as Title 42 Ends"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-779867?width=640&height=360"
					date="5/11/2023"
					time="1:100AM"
					source="Techcabal"
				/>
				<Article
					title="Pentagon to Send 1,500 Troops to Mexico Border as Title 42 Ends"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-779867?width=640&height=360"
					date="5/11/2023"
					time="1:100AM"
					source="Techcabal"
				/>
				<Article
					title="Watch: Donald Trump, Anchor Kaitlan Collins Spar at CNN Town Hall"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-779867?width=640&height=360"
					date="5/11/2023"
					time="1:100AM"
					source="Techcabal"
				/>
				<Article
					title="Inside the Writers Strike: Negotiators Explain Where Talks Broke Down"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-772755?width=167&height=94"
					date="5/11/2023"
					time="1:100AM"
					source="Techcabal"
				/>
				<Article
					title="Watch: Cosmonauts Conduct Spacewalk Outside ISS"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-774468?width=167&height=94"
					date="5/11/2023"
					time="1:100AM"
					source="Techcabal"
				/>
				<Article
					title="Title 42: What Its End Means for Immigration and the Southern Border"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-776973?width=167&height=94"
					date="5/11/2023"
					time="1:100AM"
					source="Techcabal"
				/>
				<Article
					title="Pentagon to Send 1,500 Troops to Mexico Border as Title 42 Ends"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-779867?width=640&height=360"
					date="5/11/2023"
					time="1:100AM"
					source="Techcabal"
				/>
				<Article
					title="Pentagon to Send 1,500 Troops to Mexico Border as Title 42 Ends"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-779867?width=640&height=360"
					date="5/11/2023"
					time="1:100AM"
					source="Techcabal"
				/>
				<Article
					title="Watch: Donald Trump, Anchor Kaitlan Collins Spar at CNN Town Hall"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-779867?width=640&height=360"
					date="5/11/2023"
					time="1:100AM"
					source="Techcabal"
				/>
				<Article
					title="Inside the Writers Strike: Negotiators Explain Where Talks Broke Down"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-772755?width=167&height=94"
					date="5/11/2023"
					time="1:100AM"
					source="Techcabal"
				/>
				<Article
					title="Watch: Cosmonauts Conduct Spacewalk Outside ISS"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-774468?width=167&height=94"
					date="5/11/2023"
					time="1:100AM"
					source="Techcabal"
				/>
				<Article
					title="Title 42: What Its End Means for Immigration and the Southern Border"
					link="https://www.wsj.com/video/watch-donald-trump-anchor-kaitlan-collins-spar-at-cnn-town-hall/E466C68C-0418-4659-ADBC-1FED92C8A2FB.html"
					image="https://images.wsj.net/im-776973?width=167&height=94"
					date="5/11/2023"
					time="1:100AM"
					source="Techcabal"
				/>
			</div>
		</section>
	)
}

export default Category;


