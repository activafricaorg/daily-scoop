import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import utilityStyles from "@/styles/Utility.module.scss";
import Article from "@/components/Article";

const Page = () => {
	const router = useRouter();
	return (
		<Layout>
			<Head>
				<title>{ router.query.slug } Daily Scoop Africa</title>
				<meta name="description" content="Daily scoop of entertainment, business, technology, and sport news" />
			</Head>
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
		</Layout>
	)
}

export default Page;