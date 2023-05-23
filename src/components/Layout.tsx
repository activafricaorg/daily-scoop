import React, { useState } from "react";
import Heading from "@/components/Heading";
import contentStyles from "@/styles/Category.module.scss";
import Head from "next/head";
import styles from "@/styles/Home.module.scss";

interface LayoutProps {
	children: string | JSX.Element | JSX.Element[]
}

const Layout = ({children} : LayoutProps) => {
	return (
		<>
			<main className={styles.main}>
				<header>
					<h1>Daily Scoop</h1>
				</header>
				<section className={`${contentStyles.container}`}>
					<Heading />
					{ children }
				</section>
			</main>
		</>
	)
}

export default Layout;