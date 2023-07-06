import Image from "next/image";
import Link from "next/link";
import headingStyles from "@/styles/Heading.module.scss";
import utilityStyles from "@/styles/Utility.module.scss";
import Category from "@/components/Category";

const Layout = (props: {children: string | JSX.Element | JSX.Element[]}) => {
	return (
		<main>
			<header>
				<Image className="logo" src="/images/daily-scoop-logo.png" width={113} height={40} alt="Daily Scoop Africa" />
				<div className={headingStyles.menuTrigger}>MENU</div>
			</header>
			<div className={`${headingStyles.container} ${utilityStyles.grid}`}>
				{props.children}
			</div>
		</main>
	)
}

export default Layout;