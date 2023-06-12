import headingStyles from "@/styles/Heading.module.scss";
import utilityStyles from "@/styles/Utility.module.scss";

interface LayoutProps {
	children: string | JSX.Element | JSX.Element[]
}

const Layout = ({children} : LayoutProps) => {
	return (
		<main>
			<header>
				<h1>Daily Scoop</h1>
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