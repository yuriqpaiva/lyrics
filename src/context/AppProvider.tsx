import { createContext, useEffect, useState } from "react";

interface AppContextProps {
    artista: string
    musica: string
    dadosApi?: object
    erro: string
    setArtista?: (artista: string) => void
    setMusica?: (musica: string) => void
    catchLyrics?: () => void
}

export const AppContext = createContext<AppContextProps>({
    artista: null,
    musica: null,
    dadosApi: null,
    erro: null
})

export function AppProvider(props: any) {

    const [artista, setArtista] = useState('')
    const [musica, setMusica] = useState('')
    const [dadosApi, setDadosApi] = useState({})
    const [erro, setErro] = useState('')

    async function catchLyrics() {
        const dados = await fetch(`https://api.vagalume.com.br/search.php?art=${artista}&mus=${musica}`)
        const convert = await dados.json()
        const letraApi = await convert.mus?.[0]?.text
        const artistaApi = await convert?.art?.name
        const musicaApi = await convert.mus?.[0].name
        if (letraApi && artistaApi && musicaApi) {
            setDadosApi({ letraApi, artistaApi, musicaApi })
            setErro('')
        } else {
            setErro('O artista / música não foi encontrado(a)')
            setDadosApi({})
        }
    }

    return (
        <AppContext.Provider value={{
            artista, musica, dadosApi, erro, setArtista, setMusica, catchLyrics
        }}>
            {props.children}
        </AppContext.Provider>
    )
}