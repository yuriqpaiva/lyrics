import { createContext, useEffect, useState } from "react";

interface AppContextProps {
    artista: string
    musica: string
    letra: string
    setArtista?: (artista: string) => void
    setMusica?: (musica: string) => void
}

export const AppContext = createContext<AppContextProps>({
    artista: null,
    musica: null,
    letra: null
})

export function AppProvider(props) {

    const [artista, setArtista] = useState('')
    const [musica, setMusica] = useState('')
    const [letra, setLetra] = useState('')

    useEffect(() => {
        async function retornaLetra() {
            const dados = await fetch('https://api.vagalume.com.br/search.php?art=djavan&mus=oceano')
            const convert = await dados.json()
            const letraApi = convert.mus[0].text
            setLetra(letraApi)
        }
        retornaLetra()
    }, [])

    return (
        <AppContext.Provider value={{
            artista, musica, letra, setArtista, setMusica
        }}>
            {props.children}
        </AppContext.Provider>
    )
}