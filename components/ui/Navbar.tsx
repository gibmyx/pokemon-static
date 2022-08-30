import {Link, Spacer, Text, useTheme} from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link"

type Props = {};
export const Navbar = (props: Props) => {

    const {theme} = useTheme()


    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            alignContent: 'start',
            padding: '0x 20px',
            backgroundColor: theme?.colors.gray900.value
        }}>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                alt="Icono de la app"
                width={70}
                height={70}
            />

            <NextLink href="/" passHref>
                <Link>
                    <Text color="white" h2>P</Text>
                    <Text color="white" h3>okémon</Text>
                </Link>
            </NextLink>

            <Spacer css={{flex: 1}}/>
            <NextLink href="/favoritos" passHref>
                <Link css={{marginRight: '20px'}}>
                    <Text color="white">Favoritos</Text>
                </Link>
            </NextLink>
        </div>
    );
};