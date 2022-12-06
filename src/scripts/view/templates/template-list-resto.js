class templatesListResto extends HTMLElement {
  set listResto(restaurant) {
    this._listResto = restaurant;
    this.render();
  }

  idResto(id) {
    this._idResto = id;
  }

  render() {
    this.innerHTML = `
    <div id="mainContent">
      <div tabindex="0" class="explore">
      <h2 class="hExplore">Cari restoran di sekitar kamu yuk</h2>
      <p class="pExplore">Kemanapun travellingnya, cari restoran Zay Resto tempatnya</p>
      </div>
      <div id="contentArea">
      <div id="hasil" class="listRestaurant"></div>
      </div>
      </div>
      `;

    const restaurantTersedia = this.querySelector('#hasil');
    restaurantTersedia.innerHTML = '';
    this._listResto.forEach((restaurant) => {
      restaurantTersedia.innerHTML += `
        <div tabindex="0" id="${restaurant.id}"
        class="katalog">
        <div class="detailResto">
        <p class="kota">Kota ${restaurant.city}</p>
        <img class="fotoResto lazyload" data-src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}"
        alt="Gambar Restaurant ${restaurant.name}
        yang berlokasi di Kota ${restaurant.city}"/>
        <p class="rating"><b>Rating</b> : ${restaurant.rating}</p>
        <h3 class="namaRestaurant">${restaurant.name}</h3>
        <p class="keterangan">${restaurant.description.slice(0, 300)}</p>
        </div>
        <button onclick="window.location.href='#/detail/${restaurant.id}'" class="tombolDetail" id="tombolDetail">Lihat Detail</button>
        </div>
        `;
    });
  }
}

customElements.define('list-restaurant', templatesListResto);
