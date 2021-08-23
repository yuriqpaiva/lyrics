import useAppData from "../src/hook/useAppData";
import Button from "./Button";
import Input from "./Input";
import Lyrics from "./Lyrics";

interface LayoutProps {
    title: string
    letra: string
}

export default function Layout(props: LayoutProps) {

    const { artista, musica, setArtista, setMusica } = useAppData()

    return (
        <div className={`
            flex flex-col items-center 
           bg-white p-5 rounded-md shadow-lg w-11/12 my-3

        `}>
            <h1 className='text-center mb-5 text-4xl'>{props.title}</h1>
            <div className={`flex flex-col lg:w-4/12 md:w-2/4`}>
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
                <Button value='Procurar' />
                <Lyrics letra={props.letra} />
            </div>
        </div>
    )
}