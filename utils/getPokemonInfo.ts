import {pokeApi} from "../api";
import {Pokemon} from "../interfaces";

export const getPokemonInfo = async (nameOrId: string) => {

    try {
        const {data} = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`)
        return {
            id: data.id,
            name: `${data.name} | Update: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
            sprites: data.sprites
        }
    } catch (e) {
        return null;
    }

}