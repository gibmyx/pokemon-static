import React, {FC} from 'react';
import {SmallPokemon} from "../../interfaces";
import {Card, Grid, Row, Text} from "@nextui-org/react";
import {useRouter} from "next/router";

type Props = {
    pokemon: SmallPokemon
};
export const PokemonCard: FC<Props> = ({pokemon}) => {

    const router = useRouter()

    const onClick = () => {
        router.push(`/pokemon/${pokemon.id}`)
    }

    return (
        <>
            <Grid
                xs={6}
                sm={3}
                md={2}
                xl={1}
            >
                <Card
                    hoverable
                    clickable
                    onClick={onClick}>
                    <Card.Body css={{p: 1}}>
                        <Card.Image
                            src={pokemon.image}
                            width="100%"
                            height={140}
                        />
                    </Card.Body>
                    <Card.Footer>
                        <Row justify='space-between'>
                            <Text>{pokemon.name}</Text>
                            <Text>#{pokemon.id}</Text>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>
        </>
    );
};