import React from 'react';

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Logo */}
      <a href="../../index3.html" className="brand-link">
        <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>

      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* Adicione aqui os itens do menu da barra lateral */}
            <li className="nav-item">
              <a href="../" className="nav-link">
                <i className="nav-icon fas fa-th"></i>
                <p>
                  Cadastrar cliente
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="../Contrato" className="nav-link">
                <i className="nav-icon fas fa-th"></i>
                <p>
                  Cadastrar contrato
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="../Aditivo" className="nav-link">
                <i className="nav-icon fas fa-th"></i>
                <p>
                  Inserir aditivo
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="../Repactuacao" className="nav-link">
                <i className="nav-icon fas fa-th"></i>
                <p>
                  Inserir repactuação
                </p>
              </a>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Sidebar;