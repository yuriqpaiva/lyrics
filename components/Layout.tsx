import Button from "./Button";
import Input from "./Input";
import Lyrics from "./Lyrics";

interface LayoutProps {
    title: string
    letra: string
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
            flex flex-col items-center 
           bg-white p-5 rounded-md shadow-lg w-11/12

        `}>
            <h1 className='text-center mb-5 text-4xl'>{props.title}</h1>
            <div className={`flex flex-col lg:w-4/12 md:w-2/4`}>
                <Input value='Artista: ' type='text' placeholder='Insira o artista'/>
                <Input value='Música: ' type='text' placeholder='Insira a música'/>
                <Button value='Procurar'/>
                <Lyrics letra={props.letra}/>
            </div>
        </div>
    )
}