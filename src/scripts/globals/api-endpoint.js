import CONFIG from './config';

const API_ENDPOINT = {
  SEARCH_RESTAURANT: (search) => `${CONFIG.URL}search?q=${search}`,
  LIST_RESTAURANT: `${CONFIG.URL}list`,
  DETAIL_RESTAURANT: (id) => `${CONFIG.URL}detail/${id}`,
};

export default API_ENDPOINT;
