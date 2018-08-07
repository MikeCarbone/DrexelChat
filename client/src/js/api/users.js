import instance from "./axiosInstance";
import {setToken} from "./authentication";


// Logs in and sets response header appropriately
export function login(email,password) {
	var body = {
		email : email,
		password: password
	}
	instance.post("/users/login", body).then(res => {
		setToken(res.data.token);
	})
}

export function register(email, password) {
	var body = {
		email : email,
		password: password
	}
	instance.post("/users/register", body).then(res => {
		setToken(res.data.token);
	})
}

