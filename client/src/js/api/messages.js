import instance from "./axiosInstance";

// Gets ALL MESSAGES from server
// TODO: Take group parameter
export function getMessages() {
	return instance.get("messages")
}

// Sends message to server, server will decode userID from Authentication Token
export function sendMessage(content, group, date) {
	let body =  {
		content : content,
		group : group,
		date : date 
	}
	return instance.post("messages", body)
}

export function deleteMessage( messageId ) {

	return instance.delete("messages", {
		params: {
			messageId : messageId
		}
	})
}
// Sends message to server, server will decode userID from Authentication Token
