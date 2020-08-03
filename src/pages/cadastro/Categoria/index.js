import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

const CadastroCategoria = () => {
  const [categorias, setCategorias] = useState([]);

  const formDefaultValue = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { formInputs, handleChange, clearForm } = useForm(formDefaultValue);

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
        {formInputs.nome}
      </h1>

      <form onSubmit={function handlerSubmit(e) {
        e.preventDefault();
        setCategorias([...categorias, formInputs]);
        clearForm(formDefaultValue);
      }}
      >

        <FormField
          label="Nome"
          type="text"
          name="nome"
          value={formInputs.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={formInputs.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={formInputs.cor}
          onChange={handleChange}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>{categoria.titulo}</li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
