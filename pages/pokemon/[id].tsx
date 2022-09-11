import React, {useState} from 'react';
import {GetStaticProps, GetStaticPaths, NextPage} from "next";
import {pokeApi} from "../../api";
import {Pokemon} from "../../interfaces";
import {Button, Card, Grid, Text, Image, Container} from "@nextui-org/react";
import {localFavorites} from "../../utils";
import confetti from 'canvas-confetti';
import {PokemonDetails} from "../../components/ui/PokemonDetails";

interface Props {
    pokemon: Pokemon
}

const Pokemon: NextPage<Props> = ({pokemon}) => {
    // const router = useRouter()
    // console.log(router.query)
    return (<PokemonDetails pokemon={pokemon}/>);
};

export const getStaticPaths: GetStaticPaths = async (context) => {
    const pokemons151 = [...Array(10)].map((value, index) => `${index + 1}`)

    return {
        paths: pokemons151.map(id => ({
            params: {id}
        })),
        fallback: false
    }
}


export const getStaticProps: GetStaticProps = async ({params}) => {
    const {id} = params as { id: string }

    const {data} = await pokeApi.get<Pokemon>(`/pokemon/${id}`)
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

export default Pokemon