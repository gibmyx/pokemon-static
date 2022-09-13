// @flow
import {FC} from "react";
import {pokeApi} from "../../api";
import {Pokemon, PokemonName, PokemonsNameList} from "../../interfaces";
import {GetStaticPaths, GetStaticProps} from "next";
import {PokemonDetails} from "../../components/ui/PokemonDetails";
import {getPokemonInfo} from "../../utils";

type Props = {
    pokemon: Pokemon
};
const PokemonByNamePage: FC<Props> = ({pokemon}) => {

    return (<PokemonDetails pokemon={pokemon}/>);
};

export const getStaticPaths: GetStaticPaths = async (context) => {
    const {data} = await pokeApi.get<PokemonsNameList>(`/pokemon?limit=151`)
    return {
        paths: data.results.map((pokemon: PokemonName) => ({
            params: {name: pokemon.name}
        })),
        // fallback: false
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {name} = params as {name: string}

    const pokemon = await getPokemonInfo(name);

    if (!pokemon) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            pokemon
        },
        revalidate: 1800
    }
}

export default PokemonByNamePage