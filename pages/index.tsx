import Layout from "../components/Layout";
import useAppData from "../src/hook/useAppData";

export default function Home() {

  const {musica, artista, letra} = useAppData()

  return (
    <div className={`
      flex justify-center min-h-screen max-h-full
      bg-blue-200
    `}>
      <Layout title='Buscar Letras' letra={letra} />
    </div>
  )
}
