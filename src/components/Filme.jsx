import "../styles/filme.css"
import Card from "./layout/Card";

export default function Filme(props) {
    return (
        <Card>
            <figure className="card-imagem">
                <img src={`http://image.tmdb.org/t/p/w500/${props.umFilme.poster_path}`} alt="poster" />
                <figcaption className="card-titulo">{ props.umFilme.title }</figcaption>
                <p className="card-descricao">{ props.umFilme.overview }</p>
                <p className="card-avaliacao"><span className="material-icons-star">star</span>{ props.umFilme.vote_average }</p>
            </figure>
        </Card>
        
    );
  }