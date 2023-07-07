import localFont from 'next/font/local';

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