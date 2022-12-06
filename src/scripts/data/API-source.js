// import CONFIG from '../globals/config';
import API_ENDPOINT from '../globals/api-endpoint';

class aksesApi {
  static async GET_list() {
    const response = await fetch(`${API_ENDPOINT.LIST_RESTAURANT}`);
    const responseData = await response.json();
    return responseData.restaurants;
  }

  static async GET_detail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    const responseData = await response.json();
    return responseData.restaurant;
  }
}

export default aksesApi;
