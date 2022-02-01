import axios from "axios";

const url = "https://beauti-saloon.herokuapp.com/services";

export const fetchServicesRequest = () => axios.get(url);
