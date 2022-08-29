import Head from "next/head";
import {Navbar} from "../ui";

type Props = {
    children: JSX.Element | JSX.Element[],
    title?: string
}

export const MainLayout = ({children, title}: Props) => {
    return (
        <>
            <Head>
                <title>{title ?? 'Pokemon App'}</title>
                <meta name="author" content="Gibmyx Gomez"/>
                <meta name="description" content={`Información sobre el pokémon ${title}`}/>
                <meta name="keywords" content={`${title}. pokemon, pokedex`}/>
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