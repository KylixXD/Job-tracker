import { Link } from "react-router-dom"

function Home({ vagas}) { // Thauan
    return(
        <>
            <h1>Teste Home</h1>
            <Link to="/nova-vaga">Nova Vaga</Link>
            <Link to="/vaga/:id">Detalhe Vaga</Link>
        </>
    )
}

export default Home