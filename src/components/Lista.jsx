import "../styles/lista.css"
import Filme from "./Filme";

import poster from "../assets/matrix_resurrections.jpg"
const gremio = "https://alexandrebot.abacta.repl.co/static/images/DanceTime.gif"
const mamaco = "https://c.tenor.com/wcCHQbYTANsAAAAS/banana-tom.gif"

export default function Lista() {

const matrix = {
    poster: gremio,
    titulo: "Matrix Resurrections",
    descricao: "Em um mundo de duas realidades, a vida cotidiana e o que está por trás dela, Thomas Anderson terá que escolher seguir o coelho branco mais uma vez. A escolha, embora seja uma ilusão, ainda é a única maneira de entrar ou sair da Matrix, que é mais forte, mais segura e mais perigosa do que nunca.",
    avaliacao: "Avaliação"
}

  return (
    <div className="flexbox-conteiner">
        <Filme umFilme = { matrix }/>
        <Filme umFilme = { matrix }/>
        <Filme umFilme = { matrix }/>
        <Filme umFilme = { matrix }/>
        <Filme umFilme = { matrix }/>
    </div>
  );
}





/*
const éverton_cebolas
const pepê
const diego_souza
*/