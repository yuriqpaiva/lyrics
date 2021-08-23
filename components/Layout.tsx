import { songIcon } from "../public/icons/icons";
import useAppData from "../src/hook/useAppData";
import Button from "./Button";
import Input from "./Input";
import Lyrics from "./Lyrics";

interface LayoutProps {
    title: string
}

export default function Layout(props: LayoutProps) {

    const { artista,
        musica,
        dadosApi,
        setArtista,
        setMusica,
        erro,
        catchLyrics } = useAppData()

    return (
        <div className={`
            flex flex-col items-center 
           bg-white rounded-md shadow-lg w-11/12 my-3 

        `}>
            <div className={`
            flex justify-center bg-blue-100 w-full 
            rounded-t pt-5 border-b-2 border-gray-300
            
            `}>

                <h1 className={`
                text-center mb-5 text-4xl font-semibold
                `}>{props.title}</h1>
                <span className={`mx-3`}>{songIcon}</span>
            </div>

            <div className={`flex flex-col mt-5 lg:w-4/12 md:w-2/4 w-72`}>
                <Input
                    title='Artista: '
                    type='text'
                    placeholder='Insira o artista'
                    value={artista}
                    onChange={setArtista}
                />
                <Input
                    title='Música: '
                    type='text'
                    placeholder='Insira a música'
                    value={musica}
                    onChange={setMusica}
                />
                <Button
                    value='Procurar'
                    onClick={catchLyrics}
                />
                <Lyrics dadosApi={dadosApi} erro={erro} />
                <p className='self-center my-3 text-center'>@2021 - Desenvolvido por
                    <a
                        href="https://github.com/yuriqpaiva"
                        className={`
                        text-blue-800 font-semibold 
                        hover:text-blue-500
                        `}
                        rel='noreferrer'
                        target='_blank'
                    > Yuri Paiva</a>
                </p>
            </div>
        </div>
    )
}