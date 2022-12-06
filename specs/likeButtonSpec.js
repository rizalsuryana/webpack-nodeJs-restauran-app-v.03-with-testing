/* eslint-disable no-undef */
// import { async } from 'regenerator-runtime';
import favoriteResto from '../src/scripts/data/favorite-resto';
import * as dataFactor from './likeData/dataLikeSpec';

describe('Liking A Restaurant', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="likeArea"></div>';
  });

  it('should show the like button when the restaurant has not been like before', async () => {
    await dataFactor.createTemplateLikeData({ id: 1 });
    expect(document.querySelector('[arial-label="like restaurant"]'))
      .toBeTruthy();
  });

  it('Should display the unlike button if the button is liked', async () => {
    await dataFactor.createTemplateLikeData({ id: 1 });
    expect(document.querySelector('[arial-label="unlike restaurant"]'))
      .toBeFalsy();
  });

  it('should like the restaurant you like', async () => {
    document.body.innerHTML = '<div id="likeArea"></div>';

    await dataFactor.createTemplateLikeData({ id: 1 });
    document.querySelector('#loveButtonElement').dispatchEvent(new Event('click'));

    const restaurant = await favoriteResto.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    favoriteResto.deleteRestaurant(1);
  });

  it('should not like the restaurant you dont like', async () => {
    document.body.innerHTML = '<div id="likeArea"></div>';
    await dataFactor.createTemplateLikeData({ id: 1 });

    document.querySelector('#loveButtonElement').dispatchEvent(new Event('click'));
    const restaurant = await favoriteResto.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    favoriteResto.deleteRestaurant(1);
  });

  it('should not add the restaurant you like to your favorite if the restaurant is already liked', async () => {
    await dataFactor.createTemplateLikeData({ id: 1 });

    await favoriteResto.putRestaurant({ id: 1 });

    document.querySelector('#loveButtonElement').dispatchEvent(new Event('click'));

    expect(await favoriteResto.getAllRestaurant()).toEqual([{ id: 1 }]);
    favoriteResto.deleteRestaurant(1);
  });

  it('should not add a restaurant if the id does not exist', async () => {
    await dataFactor.createTemplateLikeData({});

    document.querySelector('#loveButtonElement').dispatchEvent(new Event('click'));
    expect(await favoriteResto.getAllRestaurant()).toEqual([]);
  });
});
