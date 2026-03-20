import { Link } from "react-router-dom"
import { useState } from "react"

import CardMetrica from "../components/CardMetrica"
import ListaVagas from "../components/ListaVagas"

function Home({ vagas }) { //Thauan - Função para as vagas chegar no App, filtros para mostrar as vagas
    const [filtro, setFiltro] = useState("todas")
    const  vagasFiltradas = vagas.filter(v => filtro === "todas" ? true : v.status === filtro
      //Thauan - filtra o arreio vagas baseado no filtro ativo.  
    )

    return(
        <>
            <h1>Job Tracker</h1>

            {/* link para adicionar novas vagas*/}
            <Link to="/nova-vaga">Nova Vaga</Link>
            {/* passa todas as vagas para o card calcular os totais */}
            <CardMetrica vagas={vagas} />
            {/* passa as vagas já filtrada e o controle do filtro */}
            <ListaVagas
                vagas={vagasFiltradas}
                filtro={filtro}
                setFiltro={setFiltro}
                />
        </>
    )
}

export default Home