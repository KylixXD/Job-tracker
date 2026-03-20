import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'
import NovaVaga from './Pages/NovaVaga'
import DetalhesVaga from './Pages/DetalhesVaga'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/nova-vaga' element={<NovaVaga/>}></Route>
        <Route path='/vaga/:id' element={<DetalhesVaga/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
