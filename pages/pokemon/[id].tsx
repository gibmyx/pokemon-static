import React, {useEffect, useState} from 'react';
import {MainLayout} from "../../components/layouts";
import {GetStaticProps, GetStaticPaths, NextPage} from "next";
import {pokeApi} from "../../api";
import {Pokemon} from "../../interfaces";
import {Button, Card, Grid, Text, Image, Container} from "@nextui-org/react";
import {localFavorites} from "../../utils";

interface Props {
    pokemon: Pokemon
}

const Pokemon: NextPage<Props> = ({pokemon}) => {
    // const router = useRouter()
    // console.log(router.query)

    const [isInFavorite, setIsInFavorite] = useState(localFavorites.existInFavorite(pokemon.id));

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id)
        setIsInFavorite(!isInFavorite)
    }

    useEffect(() => {

    }, []);

    return (
        <MainLayout title={pokemon.name}>
            <Grid.Container
                css={{marginTop: '5px'}}
                gap={2}
            >
                <Grid xs={12} sm={4}>
                    <Card
                        hoverable
                        css={{padding: '30px'}}
                    >
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || '/np-image.png'}
                                alt={pokemon.name}
                                width="100%"
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
                            <Text h1>{pokemon.name}</Text>
                            <Button
                                color="gradient"
                                ghost
                                onClick={onToggleFavorite}
                            >
                                {
                                    isInFavorite
                                        ? 'Remover de favorito'
                                        : 'Guardar en favoritos'
                                }
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container direction='row' display='flex' gap={0}>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>

            </Grid.Container>
        </MainLayout>
    );
};

export const getStaticPaths: GetStaticPaths = async (context) => {
    const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`)

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
            pokemon: data
        }
    }
}

export default Pokemon