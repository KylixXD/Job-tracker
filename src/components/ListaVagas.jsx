// thauan - vagas ja filtardas,  o filtro ativo e a função para mudar o filtro
function ListaVagas({ vagas, filtro, setFiltro}){
    return(
        <div>
            <h2>Vagas</h2>
            {/* esses botoes servem parar filtrar as vagas */}
            <div>

                <button onClick={() => setFiltro("todas")}>Todas</button>
                <button onClick={() => setFiltro("entrevista")}>Entrevistas</button>
                <button onClick={() => setFiltro("aprovada")}>Aprovadas</button>
                <button onClick={() =>setFiltro ("rejeitada")}>Rejeitadas</button>
            </div>
      
           
    {/* Essa parte vai percorrer o arrey de vagas e vai exibir um card para cada */}
    {vagas.map(vaga => (
     <div key={vaga.id}>
        <h3>{vaga.empresa}</h3>
        <p>{vaga.cargo}</p>
        <span>{vaga.status}</span>
     </div>
))}

  </div>
 )    

}

export default ListaVagas
