import type {GetStaticProps, NextPage} from 'next'
import {MainLayout} from "../components/layouts";
import {pokeApi} from "../api";
import {PokemonResponse, SmallPokemon} from "../interfaces";
import {Grid} from "@nextui-org/react";
import {PokemonCard} from "../components/pokemon";

interface Props {
    pokemons: SmallPokemon[]
}

const Home: NextPage<Props> = ({pokemons}) => {
    return (
        <MainLayout title="Listado de Pokémons">
            <Grid.Container gap={2} justify="center">
                {
                    pokemons && pokemons.map((pokemon) => <PokemonCard pokemon={pokemon} key={pokemon.id}/>)
                }
            </Grid.Container>
        </MainLayout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {

    const {data} = await pokeApi.get<PokemonResponse>('/pokemon?limit=10')

    const pokemons: SmallPokemon[] = data.results.map((pokemon: SmallPokemon, index) => {
        const id = index+1
        return {
            name: pokemon.name,
            url:  pokemon.url,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
            id:  id
        }
    })

    return {
        props: {pokemons}
    }
}

export default Home
