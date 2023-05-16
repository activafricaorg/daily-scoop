// import { IBM_Plex_Serif } from 'next/font/google';
import localFont from "next/dist/compiled/@next/font/dist/local";

// export const ibmPlexSerif = IBM_Plex_Serif({
// 	weight: ['400', '500', '700'],
// 	style: ['normal', 'italic'],
// 	subsets: ['latin'],
// 	display: 'swap',
// });

export const mallory = localFont({
	src: [
		{
			path: '/fonts/Mallory_Book.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '/fonts/Mallory_Bold.woff2',
			weight: '700',
			style: 'bold',
		}
	],
});

