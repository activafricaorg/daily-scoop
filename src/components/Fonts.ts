import localFont from 'next/font/local';
import { IBM_Plex_Serif } from 'next/font/google';

export const IbmPlexSerif = IBM_Plex_Serif({
	weight: ['400', '500', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
});

export const Mallory = localFont({
	src: [
		{
			path: './../../public/fonts/Mallory_Light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: './../../public/fonts/Mallory_Book.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './../../public/fonts/Mallory_Bold.woff2',
			weight: '700',
			style: 'bold',
		}
	],
});