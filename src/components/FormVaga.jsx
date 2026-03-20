function FormVaga() {
    // const { novaEmpresa}
    return(

            <form>
                <div>
                     <label>
                        Nome Empresa
                        <input type="text" 
                        name="novaEmpresa"  
                        />
                     </label>
                </div>

                <div>
                     <label>
                        Cargo
                        <input type="text" 
                        name="novaEmpresa"  
                        />
                     </label>
                </div>

                <div>
                     <label>
                        Status
                        <input type="text" 
                        name="novaEmpresa"  
                        />
                     </label>
                </div>

                <button type="submit">Cadastrar vaga</button>
            </form>
    )
}

export default FormVaga