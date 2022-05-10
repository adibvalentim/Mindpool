//AXIOS - API CONNECT - ENDPOINT FOR TEST

import axios from "axios";

const api = axios.create({
    baseURL: "https://demo7671310.mockable.io/api/surveys/frontend-interview",
});

export default api;