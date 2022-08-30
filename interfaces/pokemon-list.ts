export interface PokemonResponse {
    count:    number;
    next:     string | null;
    previous: string | null;
    results:  SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url:  string;
    image:  string;
    id:  number;
}
