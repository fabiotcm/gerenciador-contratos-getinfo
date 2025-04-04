import React from "react";

const CadastrarContrato = () => {
  return(
    <section className="content">
  <div className="row">
    <div className="col-md-6">
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">Cadastrar Cliente</h3>
          <div className="card-tools">
            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
              <i className="fas fa-minus" />
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="inputName">CNPJ</label>
            <input type="number" id="inputName" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="inputDescription">Endereço</label>
            <textarea id="inputDescription" className="form-control" rows={4} defaultValue={""} />
          </div>
          <div className="form-group">
          </div>
          <div className="form-group">
            <label htmlFor="inputClientCompany">Número para contato</label>
            <input type="tel" id="inputClientCompany" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="inputProjectLeader">Email</label>
            <input type="email" id="inputProjectLeader" className="form-control" />
          </div>
        </div>
        {/* /.card-body */}
      </div>
      {/* /.card */}
    </div>
  </div>
  <div className="row">
    <div className="col-12">
      <a href="#" className="btn btn-secondary">Cancelar</a>
      <input type="submit" defaultValue="Confirmar" className="btn btn-success float-right" />
    </div>
  </div>
</section>
  );
}
export default CadastrarContrato;