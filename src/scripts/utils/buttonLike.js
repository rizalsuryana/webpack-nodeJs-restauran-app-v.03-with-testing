import { templatesButtonLike, templatesButtonLiked } from '../view/templates/template-button';

const like = {
  async init({ likeButton, FavoriteResto, restaurant }) {
    this._likeButton = likeButton;
    this._FavoriteResto = FavoriteResto;
    this._restaurant = restaurant;

    await this.rederLikeButton();
  },

  async rederLikeButton() {
    const { id } = this._restaurant;

    if (await this.isRestoLiked(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },

  async isRestoLiked(id) {
    const restaurant = await this._FavoriteResto.getRestaurant(id);
    return !!restaurant;
  },

  renderLike() {
    this._likeButton.innerHTML = templatesButtonLike();

    const buttonLike = document.querySelector('#loveButtonElement');
    buttonLike.addEventListener('click', async () => {
      await this._FavoriteResto.putRestaurant(this._restaurant);
      this.rederLikeButton();
    });
  },

  renderLiked() {
    this._likeButton.innerHTML = templatesButtonLiked();

    const buttonLike = document.querySelector('#loveButtonElement');
    buttonLike.addEventListener('click', async () => {
      await this._FavoriteResto.deleteRestaurant(this._restaurant.id);
      this.rederLikeButton();
    });
  },
};

export default like;
