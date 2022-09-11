// @flow
import {FC} from "react";
import {pokeApi} from "../../api";
import {Pokemon, PokemonName, PokemonsNameList} from "../../interfaces";
import {GetStaticPaths, GetStaticProps} from "next";
import {PokemonDetails} from "../../components/ui/PokemonDetails";

type Props = {
    pokemon: Pokemon
};
const PokemonByNamePage: FC<Props> = ({pokemon}) => {

    return (<PokemonDetails pokemon={pokemon}/>);
};

export const getStaticPaths: GetStaticPaths = async (context) => {
    const {data} = await pokeApi.get<PokemonsNameList>(`/pokemon?limit=10`)
    return {
        paths: data.results.map((pokemon: PokemonName) => ({
            params: {name: pokemon.name}
        })),
        fallback: false
    }
}
export const getStaticProps: GetStaticProps = async ({params}) => {
    const pokemon = params as {name: string}
    const {data} = await pokeApi.get<Pokemon>(`/pokemon/${pokemon.name}`)
    return {
        props: {
            pokemon: {
                id: data.id,
                name: data.name,
                sprites: data.sprites
            }
        }
    }
}

export default PokemonByNamePage