import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

const acta = localFont({
    src: './Acta-Medium.woff2'
});

const mallory = localFont({
    src: [
        {
            path: './Mallory_Book.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './Mallory_Bold.woff2',
            weight: '700',
            style: 'bold',
        }
    ],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>{`html { font-family: ${mallory.style.fontFamily}; }`}</style>
            <Component {...pageProps} />
        </>
    )
}