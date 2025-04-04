import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Cadastro from './pages/Cadastro';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Cadastro}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
