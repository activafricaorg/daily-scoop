import headingStyles from "@/styles/Heading.module.scss";
import utilityStyles from "@/styles/Utility.module.scss";
import Image from "next/image";

interface LayoutProps {
	children: string | JSX.Element | JSX.Element[]
}

const Layout = ({children} : LayoutProps) => {
	return (
		<main>
			<header>
				<Image src="/images/daily-scoop-logo.png" width={150} height={67} alt="Daily Scoop Africa" />
			</header>
			<section className={ headingStyles.container }>
				<div className={`${utilityStyles.grid} ${utilityStyles.grid} ${utilityStyles.gridMain}`}>
					{ children }
				</div>
			</section>
		</main>
	)
}

export default Layout;