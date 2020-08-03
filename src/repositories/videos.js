import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

function create(videoObj) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObj),
  })
    .then(async (response) => {
      if (response.ok) {
        const responseJson = await response.json();
        return responseJson;
      }

      throw new Error('Não foi possível pegar os dados.');
    });
}

export default {
  create,
};
