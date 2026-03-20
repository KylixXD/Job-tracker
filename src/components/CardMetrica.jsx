// Thauan - recebe o arreio de vagas para calcular os totais
function CardMetrica({ vagas }){

    // Thauan - conta o total de vagas
    const total = vagas.length

    // thauan - filtra e conta so vagas com status de entrevista
    const entrevistas = vagas.filter( v=> v.status === "entrevista").length

    // thauan - mesma coisa so q agora com o status rejeitada
    const rejeitadas = vagas.filter(v=> v.status === "rejeitada").length

    return(
        <div>
            {/* thauan- vcard total de vagas */}
            <div>
                <h3>Total</h3>
                <p>{total}</p>
            </div>
            
        {/* thauan- card de entrevistas */}
            <div>
                <h3>Entrevistas</h3>
                <p>{entrevistas}</p>
            </div>

        {/* thauan - card de rejeitadas */}
            <div>
                <h3>Rejeitadas</h3>
                <p>{rejeitadas}</p>
            </div>
        </div>
    )

}

export default CardMetrica