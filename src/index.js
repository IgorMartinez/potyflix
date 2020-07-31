import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';

const Pagina404 = () => {
  return (
    <div>Página 404</div>
  )
}

ReactDOM.render(
  <BrowserRouter> 
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

/* <React.StrictMode>
    <App />
  </React.StrictMode> */ 
