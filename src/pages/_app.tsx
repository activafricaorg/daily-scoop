import '@/styles/globals.scss';
import { IBM_Plex_Serif } from 'next/font/google';
import type { AppProps } from 'next/app';

const ibmPlexSerif = IBM_Plex_Serif({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>{`html { font-family: ${ibmPlexSerif.style.fontFamily}; }`}</style>
            <Component {...pageProps} />
        </>
    )
}