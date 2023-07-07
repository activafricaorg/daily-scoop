import Image from "next/image";
import SectionStyles from "@/styles/Section.module.scss";
import UtilityStyles from "@/styles/Utility.module.scss";

const Layout = (props: {children: string | JSX.Element | JSX.Element[]}) => {
	return (
		<main>
			<header>
				<Image className="logo" src="/images/daily-scoop-logo.png" width={113} height={40} alt="Daily Scoop Africa" />
			</header>
			<div className={`${SectionStyles.container} ${UtilityStyles.grid}`}>
				{props.children}
			</div>
		</main>
	)
}

export default Layout;