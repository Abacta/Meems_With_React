import { useEffect, useState } from "react";
import "../styles/lista.css"
import Filme from "./Filme";

export default function Lista() {

  const [filmes, setFilmes] = useState([])

  const apiKey = "535f0cdf3f095f54f238cb0fbe6aea2f"

  useEffect( () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&language=pt-BR`).then(
      retornoFetch => retornoFetch.json()
    ).then(
      dados => setFilmes(dados.results)
    )
  }, [] )

  return (
    <div className="flexbox-conteiner">
        {filmes.map( filme => <Filme umFilme = {filme}/> )}
    </div>
  );
}