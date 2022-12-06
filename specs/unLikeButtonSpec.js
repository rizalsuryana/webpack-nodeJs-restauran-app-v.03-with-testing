/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable arrow-spacing */
// import { async } from 'regenerator-runtime';
import favoriteResto from '../src/scripts/data/favorite-resto';
import * as dataFactor from './likeData/dataLikeSpec';

describe('unliking a restaurant', () => {
  beforeEach(async () => {
    document.body.innerHTML = '<div id="likeArea"></div>';
    await favoriteResto.putRestaurant(1);
  });

  afterEach(async () => {
    await favoriteResto.deleteRestaurant(1);
  });

  it('should show the unlike button if you dont like it yet', async () =>{
    await dataFactor.createTemplateLikeData({ id: 1 });

    expect(document.querySelector('[arial-label="like restaurant"]'))
      .toBeTruthy();
  });

  it('should show dislike button if like button', async () => {
    await dataFactor.createTemplateLikeData({ id: 1 });

    expect(document.querySelector('[arial-label="unlike restaurant"]'))
      .toBeFalsy;
  });

  it('should be if you press the unlike restaurant button it will be removed from the data list', async () => {
    await dataFactor.createTemplateLikeData({});
    favoriteResto.deleteRestaurant(1);

    document.querySelector('#loveButtonElement').dispatchEvent(new Event('click'));
    expect(await favoriteResto.getAllRestaurant()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await dataFactor.createTemplateLikeData({ id: 1 });
    // favoriteResto.deleteRestaurant(1);

    expect(await favoriteResto.getAllRestaurant()).toEqual([]);
  });
});
