import Heading from "@/components/Heading";
import contentStyles from "@/styles/Category.module.scss";
import utilityStyles from "@/styles/Utility.module.scss";
import styles from "@/styles/Home.module.scss";

interface LayoutProps {
	children: string | JSX.Element | JSX.Element[]
}

const Layout = ({children} : LayoutProps) => {
	return (
		<main className={styles.main}>
			<header>
				<h1>Daily Scoop</h1>
			</header>
			<section className={ contentStyles.container }>
				<div className={`${contentStyles.mainWrapper} ${utilityStyles.grid} ${utilityStyles.grid} ${utilityStyles.gridMain}`}>
					<Heading />
					<div className={`${utilityStyles.grid}`}>
						{ children }
					</div>
				</div>
			</section>
		</main>
	)
}

export default Layout;