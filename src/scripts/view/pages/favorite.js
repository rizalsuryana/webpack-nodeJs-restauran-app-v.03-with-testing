// import daftarFavorite from '../../data/favorite-resto';
import FavoriteResto from '../../data/favorite-resto';
import '../templates/template-favorite-resto';

const favoritesPage = {
  async render() {
    return `
        <favorite-restaurant></favorite-restaurant>
        `;
  },

  async afterRender() {
    const restaurant = await FavoriteResto.getAllRestaurant();
    const favoriteList = document.querySelector('favorite-restaurant');
    favoriteList.restaurantFavorite = restaurant;
    console.log(restaurant);
  },
};

export default favoritesPage;
