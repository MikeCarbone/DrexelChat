import axios from "axios";

export function getMessages() {
	return axios.get("http://localhost:3001/api/messages").then(response => {
		return response.data
	})
}