import type Tema from "./Tema"
import type Usuario from "./Usuario"



export default interface postagem{
    id: number
    titulo: string
    texto: string
    date: string
    tema: Tema | null
    usuario: Usuario | null
}