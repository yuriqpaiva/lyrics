interface LyricsProps {
    dadosApi: any
    erro: string
}

export default function Lyrics({dadosApi, erro}: LyricsProps) {
    return (
        <div>
            <h2 className='text-center text-red-600 mb-5'>{erro}</h2>
            <h2 className="text-2xl">{dadosApi.musicaApi}</h2>
            <h3 className="text-blue-600">{dadosApi.artistaApi}</h3>
            <p className={`whitespace-pre-line mt-5`}>
                {dadosApi.letraApi}
            </p>
        </div>
    )
}