import React, {useState} from 'react';
import {GetStaticProps, GetStaticPaths, NextPage} from "next";
import {pokeApi} from "../../api";
import {Pokemon} from "../../interfaces";
import {Button, Card, Grid, Text, Image, Container} from "@nextui-org/react";
import {getPokemonInfo, localFavorites} from "../../utils";
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
    const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`)

    return {
        paths: pokemons151.map(id => ({
            params: {id}
        })),
        // fallback: false
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {id} = params as { id: string }
    const pokemon = await getPokemonInfo(id);

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

export default Pokemon