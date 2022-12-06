import like from '../../src/scripts/utils/buttonLike';
import favoriteResto from '../../src/scripts/data/favorite-resto';

const createTemplateLikeData = async (restaurant) => {
  await like.init({
    likeButton: document.querySelector('#likeArea'),
    FavoriteResto: favoriteResto,
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createTemplateLikeData };
