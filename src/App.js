import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import CadastroCliente from './pages/CadastroCliente';
import CadastroContrato from './pages/CadastroContrato'
import Aditivo from './pages/Aditivo';
import Repactuacao from './pages/Repactuacao';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={CadastroCliente}/>
        <Route path='/Contrato' Component={CadastroContrato}/>
        <Route path='/Aditivo' Component={Aditivo}/>
        <Route path='/Repactuacao' Component={Repactuacao}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
