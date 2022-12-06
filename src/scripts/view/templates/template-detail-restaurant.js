import CONFIG from '../../globals/config';

const templatesDetailRestaurant = (restaurant) => `
<div tabindex="0" id="halamanDetail">
    <h1 tabindex="0" id="titleRestaurant">${restaurant.name}</h1>
    <img id="fotoRestaurant" src="${CONFIG.LARGE_PICTURE}/${restaurant.pictureId}" alt"Gamabar restaurant ${restaurant.name} pada halaman details" />
    <div aria-label="buttonLike" id="likeArea" clas="buttonLoveArea"></div>
    <div tabindex="0" id="detailRestaurant">
        <h2 class="detailDetailRestaurant"> Detail Restaurant </h2>
        <h3> Rating </h3>
        <p>${restaurant.rating}</p>
    </div>
    <div tabindex="0" id="detailLocation">
        <h3> Location </h3>
        <p> ${restaurant.city} </p>
    </div>

    <div tabindex="0" id="detailAddress>
        <h3> Address </h3>
        <p> ${restaurant.address} </p>
    </div>

    <div tabindex="0" id="detailDescription">
        <h3> Description </h3>
        <p class="isiDetail"> ${restaurant.description.slice(0, 300)} </p>
    </div>

    <div tabindex="0" id="menus">
        <div id="foodMenus">
            <h3> Foods Menu </h3>
            <table id="foods"></table>
        </div>

        <div tabindex="0" id="drinkMenus">
            <h3> Drinks Menu </h3>
            <table id="drinks"></table>
        </div>
    </div>
    <hr>
    <div tabindex="0" id="review">
        <h3> Review Restaurant </h3>
        <div tabindex="0" id="reviewCustomer">
        </div>
    </div>
</div>

`;

export default templatesDetailRestaurant;
