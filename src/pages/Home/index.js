import React, { useEffect, useState } from 'react';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categoria';

function Home() {
  const [dadosHome, setDadosHome] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasWithVideos) => {
        setDadosHome(categoriasWithVideos);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosHome.length === 0 && (<div>Loading...</div>)}

      {dadosHome.map((categoria, index) => {
        if (index === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosHome[0].videos[0].titulo}
                url={dadosHome[0].videos[0].url}
                videoDescription="lalalala"
              />

              <Carousel
                category={dadosHome[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
