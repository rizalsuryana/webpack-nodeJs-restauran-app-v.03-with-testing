import Home from '../view/pages/beranda';
import detailRestaurantPage from '../view/pages/details';
import favoritesPage from '../view/pages/favorite';

const routes = {
  '/': Home,
  '/beranda': Home,
  '/favorite': favoritesPage,
  '/detail/:id': detailRestaurantPage,
};

export default routes;
