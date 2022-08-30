import React from 'react';
import {MainLayout} from "../../components/layouts";
import {useRouter} from "next/router";
import {GetStaticProps, GetStaticPaths, NextPage} from "next";
import {pokeApi} from "../../api";
import {Pokemon} from "../../interfaces";
import {Simulate} from "react-dom/test-utils";

interface Props {
    pokemon: Pokemon
}

const Pokemon:NextPage<Props> = ({pokemon}) => {
    // const router = useRouter()
    // console.log(router.query)

    return (
        <MainLayout>
            <h1>{pokemon.name}</h1>
        </MainLayout>
    );
};

export const getStaticPaths: GetStaticPaths = async (context) => {
    const pokemons151 = [...Array(151)].map((value, index) => `${index+1}`)

    return{
        paths: pokemons151.map(id => ({
            params: {id}
        })),
        fallback: false
    }
}


export const getStaticProps: GetStaticProps = async ({params}) => {
    const {id} = params as {id: string}

    const {data} = await pokeApi.get<Pokemon>(`/pokemon/${id}`)
    return {
        props: {
            pokemon: data
        }
    }
}

export default Pokemon