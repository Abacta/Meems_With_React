import "../styles/filme.css"
import Card from "./layout/Card";

// const rick = "https://c.tenor.com/CHc0B6gKHqUAAAAi/deadserver.gif"
// const saul = "https://i.ytimg.com/vi/pL81PmvSeaQ/hqdefault.jpg"

export default function Filme(props) {
    return (
        <Card>
            <figure className="card-imagem">
                <img src={ props.umFilme.poster } alt="poster" />
                <figcaption className="card-titulo">{ props.umFilme.titulo }</figcaption>
                <p className="card-descricao">{ props.umFilme.descricao }</p>
                <p className="card-avaliacao">{ props.umFilme.avaliacao }</p>
            </figure>
        </Card>
        
    );
  }