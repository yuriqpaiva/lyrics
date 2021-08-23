import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function Home() {

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
    <div className={`
      flex justify-center min-h-screen max-h-full
      bg-blue-200
    `}>
      <Layout title='Buscar Letras' letra={letra} />
    </div>
  )
}
