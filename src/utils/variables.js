export const cutArray = (array, num) => {
  return array.splice(0, num);
};

export const createURL = (category, mediaType, id = false, detaills = false, pageNumber = 1) => {
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_KEY = 'api_key=055a0350f6a59ecfcbd9ab2fede17992';
  const LANGUAGE = '&language=es-MX';
  const PAGE = `&page=${pageNumber}`;

  const queryParams = API_KEY + LANGUAGE;

  if (id && detaills) {
    return `${BASE_URL}/${mediaType}/${id}/${detaills}?${queryParams}`;
  };

  if (id) {
    return `${BASE_URL}/${mediaType}/${id}?${queryParams}`;
  };

  if (category === 'trending') {
    return `${BASE_URL}/${category}/${mediaType}/week?${queryParams + PAGE}`;
  }
  else {
    return `${BASE_URL}/${mediaType}/${category}?${queryParams + PAGE}`;
  }; 
};
