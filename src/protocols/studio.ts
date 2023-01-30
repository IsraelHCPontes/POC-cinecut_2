export type Studio ={
    id: number,
    name: string,
}

export  type newStudio =  Partial<Studio>

export  type studioIsert =  Omit<Studio, 'id'>