import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import InserirAditivo from "../components/InserirAditivo";


class Aditivo extends React.Component {
  render() {
    return(
      <div className="wrapper">
        <Navbar />
        <Sidebar />

        {/* Conteúdo principal da sua aplicação */}
        <div className="content-wrapper">
          <section className="content">
            <div className="container-fluid">
              <InserirAditivo/>
              {/* Seu conteúdo aqui */}
            </div>
          </section>
        </div>
        {/* Footer e outros elementos do AdminLTE */}
    </div>
    );
  }
}
export default Aditivo;