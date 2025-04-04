import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import CadastroCliente from './pages/CadastroCliente';
import CadastroContrato from './pages/CadastroContrato'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={CadastroCliente}/>
        <Route path='/Contrato' Component={CadastroContrato}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
