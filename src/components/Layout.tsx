import Image from "next/image";
import Link from "next/link";
import headingStyles from "@/styles/Heading.module.scss";
import Category from "@/components/Category";

const Layout = (props: {children: string | JSX.Element | JSX.Element[]}) => {
	return (
		<main>
			<header>
				<Image className="logo" src="/images/daily-scoop-logo.png" width={150} height={67} alt="Daily Scoop Africa" />
				<div className={headingStyles.menuTrigger}>MENU</div>
			</header>
			<div className={headingStyles.container}>
				{props.children}
			</div>
			<nav className={headingStyles.mainMenu}>
				<div className={headingStyles.mainMenuWrapper}>
					<Category currentCategory={undefined}/>
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