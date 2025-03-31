import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />

      {/* Conteúdo principal da sua aplicação */}
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            {/* Seu conteúdo aqui */}
          </div>
        </section>
      </div>

      {/* Footer e outros elementos do AdminLTE */}
    </div>
  );
}

export default App;
