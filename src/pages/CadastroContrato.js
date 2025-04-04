import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CadastrarContrato from "../components/CadastrarContrato";

class CadastroContrato extends React.Component {

  render() {
    return(
      <div className="wrapper">
        <Navbar />
        <Sidebar />

        {/* Conteúdo principal da sua aplicação */}
        <div className="content-wrapper">
        <CadastrarContrato/>
          <section className="content">
            <div className="container-fluid">
              {/* Seu conteúdo aqui */}
            </div>
          </section>
        </div>
        {/* Footer e outros elementos do AdminLTE */}
    </div>
    )
  }
}
export default CadastroContrato;