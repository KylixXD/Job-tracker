import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import './App.css'
import Home from './Pages/Home'
import NovaVaga from './Pages/NovaVaga'
import DetalhesVaga from './Pages/DetalhesVaga'

function App() {
  const [vagas, setVagas] = useState([ // Thauan - Adicionei um objeto para armazenar as vagas de emprego, com alguns dados de exemplo
    {id: 1, empresa: "Mercado", cargo:"Vendedor", status:"entrevista"},
    {id: 2, empresa: "Iteam", cargo:"Professor", status:"aprovada"},
    {id: 3, empresa: "Google", cargo:"Desencolvedor", status:"rejeitada"},
  ])

  return (
    <BrowserRouter>
      <Routes>
        {/* Passa a vaga como prop para o home exibir no dahsboadr*/}
        <Route path='/' element={<Home vagas={vagas}/>}></Route>
        <Route path='/nova-vaga' element={<NovaVaga/>}></Route>
        <Route path='/vaga/:id' element={<DetalhesVaga/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
