// @flow
import React, {useEffect, useState} from "react";
import {MainLayout} from "../../components/layouts";
import {NoFavorites} from "../../components/ui";
import {localFavorites} from "../../utils";
import {Grid, Card} from "@nextui-org/react";
import {PokemonFavorite} from "../../components/pokemon/PokemonFavorite";

type Props = {};

const Favoritos = (props: Props) => {

    const [favoritePokemon, setFavoritePokemon] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemon(localFavorites.pokemons())
    }, []);


    return (
        <MainLayout title="Favoritos">
            {
                favoritePokemon.length === 0
                    ? <NoFavorites/>
                    : <PokemonFavorite favoritePokemon={favoritePokemon}/>
            }
        </MainLayout>
    );
};

export default Favoritos