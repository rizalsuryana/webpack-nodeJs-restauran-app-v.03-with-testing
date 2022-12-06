import UrlParser from '../../routes/url_parser';
import aksesApi from '../../data/API-source';
import templatesDetailRestaurant from '../templates/template-detail-restaurant';
import like from '../../utils/buttonLike';
import favoriteResto from '../../data/favorite-resto';

const detailRestaurantPage = {
  async render() {
    return `
        <div tabindex="0" id="detailContent" class="contentDetail"></div>

        `;
  },

  async afterRender() {
    const url = UrlParser.parserActiveUrlWithoutCombiner();
    const restaurant = await aksesApi.GET_detail(url.id);
    const detailElement = document.querySelector('#detailContent');
    console.log(restaurant);
    detailElement.innerHTML = '';
    detailElement.innerHTML = templatesDetailRestaurant(restaurant);

    like.init({
      likeButton: document.querySelector('#likeArea'),
      FavoriteResto: favoriteResto,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
      },
    });
    const menuFoods = document.querySelector('#foods');
    menuFoods.innerHTML = '';
    restaurant.menus.foods.forEach((food) => {
      menuFoods.innerHTML += `
            <tr>
            <td> ${food.name} </td>
            </tr>
            `;
    });

    const menuDrinks = document.querySelector('#drinks');
    menuDrinks.innerHTML = '';
    restaurant.menus.drinks.forEach((drink) => {
      menuDrinks.innerHTML += `
            <tr>
            <td> ${drink.name} </td>
            </tr>`;
    });

    const customerReview = document.querySelector('#reviewCustomer');
    customerReview.innerHTML = '';
    restaurant.customerReviews.forEach((rev) => {
      customerReview.innerHTML += `
              <div class="komentar">
                <div classs="namaKomentator">
                  <h3 class="nameReview"> Name : ${rev.name} </h3> 
                  <p class="descriptionReview"> Description: ${rev.review}</p>
                  <p class="dateReview"> Description: ${rev.date}</p>
                </div>
              </div>
      `;
    });
  },
};

export default detailRestaurantPage;
