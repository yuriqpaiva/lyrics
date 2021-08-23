import Layout from "../components/Layout";
import useAppData from "../src/hook/useAppData";

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
      <Layout title='Procurar Letras' />
    </div>
  )
}
