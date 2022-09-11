export interface PokemonsNameList {
    count:    number;
    next:     string;
    previous: null;
    results:  PokemonName[];
}

export interface PokemonName {
    name: string;
    url:  string;
}
