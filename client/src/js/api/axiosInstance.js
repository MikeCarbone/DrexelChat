import axios from "axios";
import {getToken} from "./authentication";

const API_PORT = process.env.API_PORT || 3001;

export default axios.create({
	baseURL: '//localhost:' + API_PORT + '/api/',
	timeout: 1000,
	headers: {'Authorization' : `Bearer ${getToken()}`}
});
