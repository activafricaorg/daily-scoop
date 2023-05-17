import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Mallory } from "@/components/Fonts";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>{`html { font-family: ${Mallory.style.fontFamily}; }`}</style>
            <Component {...pageProps} />
        </>
    )
}