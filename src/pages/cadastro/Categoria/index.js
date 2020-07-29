import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

const CadastroCategoria = () => {
  const [categorias, setCategorias] = useState([]);

  const formCategoriaReset = {
    nome: '',
    descricao: '',
    cor: ''
  };
  const [formCategoria, setFormCategoria] = useState(formCategoriaReset);

  function handleChange(event) {
    setFormCategoria({
      ...formCategoria,
      [event.target.getAttribute('name')]: event.target.value
    });
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {formCategoria.nome}</h1>

      <form onSubmit={function handlerSubmit(e) {
        e.preventDefault();
        setCategorias([...categorias, formCategoria]);
        setFormCategoria(formCategoriaReset);
      }}>

        <FormField
          label='Nome'
          type='text'
          name='nome'
          value={formCategoria.nome}
          onChange={handleChange} />

        <FormField
          label='Descrição'
          type='textarea'
          name='descricao'
          value={formCategoria.descricao}
          onChange={handleChange} />

        <FormField
          label='Cor'
          type='color'
          name='cor'
          value={formCategoria.cor}
          onChange={handleChange} />

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria.nome}${indice}`}>{categoria.nome}</li>
          );
        })}
      </ul>

      <Link to='/'>
        Ir para Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;