import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categoria';

const CadastroVideo = () => {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const titulosCategorias = categorias.map(({ titulo }) => titulo);
  const { handleChange, formInputs } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository.getAll().then((response) => {
      setCategorias(response);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categId = categorias.find((categoria) => categoria.titulo === formInputs.categoria);

        videosRepository.create({
          titulo: formInputs.titulo,
          url: formInputs.url,
          categoriaId: categId,
        }).then(() => {
          history.push('/');
        });

        history.push('/');
      }}
      >

        <FormField
          label="Título"
          type="text"
          name="titulo"
          value={formInputs.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          type="text"
          name="url"
          value={formInputs.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          type="text"
          name="categoria"
          value={formInputs.categoria}
          onChange={handleChange}
          suggestions={titulosCategorias}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastro Categoria
      </Link>
    </PageDefault>
  );
};

export default CadastroVideo;
