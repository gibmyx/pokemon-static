// @flow
import * as React from 'react';
import {Container, Image, Text} from "@nextui-org/react";

type Props = {

};
export const NoFavorites = (props: Props) => {
    return (
        <Container
            css={{
                display: 'flex',
                flexDirection: 'column',
                height: 'calc(100vh - 100px)',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
            }}
        >
            <Text h1>No hay favoritos</Text>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
                width={250}
                height={250}
                css={{
                    opacity: 0.1
                }}
            />
        </Container>
    );
};