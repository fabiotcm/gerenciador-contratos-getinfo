import React from "react";

const InserirAditivo = () => {
  return(
    <section className="content">
  <div className="row">
    <div className="col-md-6">
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">Inserir Aditivo</h3>
          <div className="card-tools">
            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
              <i className="fas fa-minus" />
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="inputName">Anexo do documento(contrato)</label>
            <input type="file" id="inputName" className="form-control" />
          </div>
          <div class="form-group">
                <label for="inputStatus">Tipo de Contrato</label>
                <select id="inputStatus" class="form-control custom-select">
                  <option selected disabled>Tipo</option>
                  <option>Posto de Serviço</option>
                  <option>Serviço</option>
                  <option>Comunicação</option>
                  <option>Infraestrutura</option>
                  <option>Desenvolvimento</option>
                </select>
          </div>
          <div className="form-group">Prazo de Vigência
            <p/>
            <label htmlFor="inputName">Data de início</label>
            <input type="date" id="inputName" className="form-control" />
            <label htmlFor="inputName">Data do fim</label>
            <input type="date" id="inputName" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="inputDescription">Entregáveis</label>
            <textarea id="inputDescription" className="form-control" rows={4} defaultValue={""} />
          </div>
          <div className="form-group">
            <label htmlFor="inputDescription">Postos de serviço</label>
            <textarea id="inputDescription" className="form-control" rows={4} defaultValue={""} />
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
export default InserirAditivo;