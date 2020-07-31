import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const CadastroCategoria = () => {
  const [categorias, setCategorias] = useState([]);

  const formCategoriaReset = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [formCategoria, setFormCategoria] = useState(formCategoriaReset);

  function handleChange(event) {
    setFormCategoria({
      ...formCategoria,
      [event.target.getAttribute('name')]: event.target.value,
    });
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://potyflix.herokuapp.com/categorias';
    fetch(URL).then(async (serverResponse) => {
      const response = await serverResponse.json();
      setCategorias([
        ...response,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {formCategoria.nome}
      </h1>

      <form onSubmit={function handlerSubmit(e) {
        e.preventDefault();
        setCategorias([...categorias, formCategoria]);
        setFormCategoria(formCategoriaReset);
      }}
      >

        <FormField
          label="Nome"
          type="text"
          name="nome"
          value={formCategoria.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={formCategoria.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={formCategoria.cor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>{categoria.nome}</li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
