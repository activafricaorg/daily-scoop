import Image from "next/image";
import Link from "next/link";

const Layout = (props: {children: string | JSX.Element | JSX.Element[]}) => {
	return (
		<main>
			<header>
				<Image className="logo" src="/images/daily-scoop-logo.png" width={113} height={40} alt="Daily Scoop Africa" />
			</header>
			{props.children}
			<footer>
				<ul>
					<li><Link href="https://activ.africa">Activ</Link></li>
					<li><Link href="/sources">News Sources</Link></li>
					<li><Link href="/about">About</Link></li>
					<li><Link href="/privacy">Privacy</Link></li>
					<li><Link href="/terms">Terms</Link></li>
					<li>© 2023 Daily Scoop Africa from Activ</li>
				</ul>
			</footer>
		</main>
	)
}

export default Layout;