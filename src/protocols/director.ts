export type Director ={
    id: number,
    name: string,
    image: string
}

export  type newDirector =  Partial<Director>

export  type directorIsert =  Omit<Director, 'id'>