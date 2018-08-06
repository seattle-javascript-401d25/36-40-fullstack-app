import superagent from 'superagent';
import * as routes from '../lib/routes';

const createImage = image => ({
  type: 'IMAGE_CREATE',
  payload: image,
});

export const createImageReq = image => (store) => {
  const { token } = store.getState();
  return superagent.post(`${API_URL}${routes.IMAGE_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .field('title', image.title)
    .attach('image', image.image)
    .then((res) => {
      return store.dispatch(createImage(res.body));
    });
};

export const fetchImageReq = () => (store) => {
  const { token } = store.getState();

  return superagent.get(`${API_URL}/me${routes.IMAGE_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => {
      return store.dispatch(createImage(res.body));
    });
};
