import Layout from "../components/Layout";
import useAppData from "../hook/useAppData";
import Head from 'next/head'

export default function Home() {

  const { catchLyrics } = useAppData()

  return (
    <div className={`
      flex justify-center min-h-screen max-h-full
      bg-blue-400
    `} onKeyUp={(e) => {
        if (e.code === 'Enter') {
          catchLyrics()
        }
      }}>
      <Head>
        <title>Procurar letras</title>
        <link rel="icon" href="/images/icone.png" type="image/png" />
      </Head>
      <Layout title='Procurar Letras' />
    </div>
  )
}
