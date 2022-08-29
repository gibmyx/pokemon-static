import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Button} from "@nextui-org/react";
import {MainLayout} from "../components/layouts";

const Home: NextPage = () => {
    return (
        <MainLayout title="Listado de Pokémons">
            <Button color="gradient">Hello world</Button>
        </MainLayout>
    )
}

export default Home
