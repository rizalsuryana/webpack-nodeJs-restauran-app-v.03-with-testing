import aksesApi from '../../data/API-source';
import '../templates/template-list-resto';

const Home = {
  async render() {
    return `
        <list-restaurant></list-restaurant>
        `;
  },

  async afterRender() {
    const restaurant = await aksesApi.GET_list();
    const daftarReataurant = document.querySelector('list-restaurant');
    console.log(restaurant);
    daftarReataurant.listResto = restaurant;
  },
};

export default Home;
