import Head from "next/head";
import {Navbar} from "../ui";
import {useRouter} from "next/router";

type Props = {
    children: JSX.Element | JSX.Element[],
    title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const MainLayout = ({children, title}: Props) => {
    return (
        <>
            <Head>
                <title>{title ?? 'Pokemon App'}</title>
                <meta name="author" content="Gibmyx Gomez"/>
                <meta name="description" content={`Información sobre el pokémon ${title}`}/>
                <meta name="keywords" content={`${title}. pokemon, pokedex`}/>

                <meta property="og:title" content={`Informacion sobre ${title}`} />
                <meta property="og:description" content={`esta es la pagina sobre ${title}`} />
                <meta property="og:image" content={`${origin}/banner.png`} />
            </Head>

            {/*Navbar*/}
            <Navbar/>

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    );
};