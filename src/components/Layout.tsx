import headingStyles from "@/styles/Heading.module.scss";
import utilityStyles from "@/styles/Utility.module.scss";
import Image from "next/image";
import Link from "next/link";
import Category from "@/components/Category";
import React from "react";

interface LayoutProps {
	children: string | JSX.Element | JSX.Element[]
}

const Layout = ({children} : LayoutProps) => {
	return (
		<main>
			<header>
				<Image className="logo" src="/images/daily-scoop-logo.png" width={150} height={67} alt="Daily Scoop Africa" />
				<div className={headingStyles.menuTrigger}>MENU</div>
			</header>
			<section className={ headingStyles.container }>
				<div className={`${utilityStyles.grid} ${utilityStyles.grid} ${utilityStyles.gridMain}`}>
					{ children }
				</div>
			</section>
			<nav className={headingStyles.mainMenu}>
				<div className={headingStyles.mainMenuWrapper}>
					<Category currentCategory={undefined} />
					<ul className={headingStyles.secondaryMenu}>
						<li className={headingStyles.mainMenuItem}><Link href="/about">About</Link></li>
						<li className={headingStyles.mainMenuItem}><Link href="/contribute">Contribute</Link></li>
					</ul>
				</div>
			</nav>
		</main>
	)
}

export default Layout;