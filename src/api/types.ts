export type ResponseType = {
    info: InfoType,
    results:CardsResultsType[]
}

export type CardsResultsType = {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: string[]
}

export type InfoType = {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null
}

export type AllEpisodesType = {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: string[],
    url: string,
    created: string
}