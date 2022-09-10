// @flow
import React, {FC} from "react";
import {Card, Grid} from "@nextui-org/react";
import {PokemonFavoriteCard} from "./PokemonFavoriteCard";

type Props = {
    favoritePokemon: number[]
};
export const PokemonFavorite: FC<Props> = ({favoritePokemon}) => {
    return (
        <Grid.Container gap={2} direction="row" justify="flex-start">
            {favoritePokemon.map(id => <PokemonFavoriteCard id={id} key={id}/>)}
        </Grid.Container>
    );
};