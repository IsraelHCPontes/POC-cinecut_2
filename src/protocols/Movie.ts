
export type Movie ={
    id: number,
    name: string,
    image: string,
    directorId: number,
    studioId: number,
    genre: string,
    score: number
}

export  type newMovie =  Partial<Movie>

export  type movieIsert =  Omit<Movie, 'id'>