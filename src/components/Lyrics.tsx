/* eslint-disable @next/next/no-img-element */

interface LyricsProps {
    dadosApi: any
    erro: string
}

export default function Lyrics({ dadosApi, erro }: LyricsProps) {
    return (
        <div className={'flex flex-col justify-center'}>

            {erro === '' ? (
                <>
                    {dadosApi.letraApi ? (
                        <>
                            <h2 className='text-center  mt-10 mb-5'>Encontramos sua música!</h2>
                            <hr className=' border-blue-600'/>
                        </>
                    ) : false}
                    <h2 className="text-2xl mt-5">{dadosApi.musicaApi}</h2>
                    <h3 className="text-blue-600">{dadosApi.artistaApi}</h3>

                    <p className={`whitespace-pre-line mt-5`}>
                        {dadosApi.letraApi}
                    </p>
                    <hr className='mt-5 border-blue-600' />
                    <img src={'https://octodex.github.com/images/jetpacktocat.png'} alt="" className='h-52 w-52 block self-center mt-5' />
                </>
            ) : (
                <>
                    <h2 className='text-center text-red-600 mt-10'>{erro}</h2>
                    <h2 className="text-2xl">{dadosApi.musicaApi}</h2>
                    <h3 className="text-blue-600">{dadosApi.artistaApi}</h3>
                    <p className={`whitespace-pre-line mt-5`}>
                        {dadosApi.letraApi}
                    </p>
                    <hr className='mt-5 border-blue-600' />
                    <img src={'https://octodex.github.com/images/labtocat.png'} alt="" className='h-52 w-52 block self-center mt-5' />
                </>
            )}

        </div>
    )
}