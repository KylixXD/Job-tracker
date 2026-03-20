import { Link } from "react-router-dom"
import FormVaga from "../components/FormVaga"

function NovaVaga() {
    return(
        <>
            <h1>Teste Nova Vaga</h1>
            <Link to="/">Home</Link>

            <FormVaga/>
        </>
    )
}

export default NovaVaga