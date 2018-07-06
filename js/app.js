import React from 'react';
import ReactDOM from 'react-dom';

//get array of previous messages
//duplicate to displayed messages array
//display that array
//type out message, click send
//add message to displayed array
//post to DB
//on refetch, check to see if messages are displayed
//--if not, add to array and display
//--if so (your own message), do not add, do not re-display 
//~~~~FASTER~~~~


//function getUser(){
//	get details from DB, store data locally so we know who is sending messages
//}

//simulated response from backend when requesting user details
const userJSON = {
	"userId": 2,
	"firstName": "Mike",
	"lastName": "Carbone",
	"fullName": "Mike Carbone",
	"picture": "http://via.placeholder.com/30x30"
}

//constructing user data for the session
var user = setUser(userJSON);

function setUser(data){
	let sessionUser = data;
	return sessionUser;
}

//Simulated response from backend when requesting messages
let responseData = {
	"channel": "drexel",
	"messages": [
		{
			"messageId": 1,
			"name": "Mike Carbone",
			"userid": 12,
			"message": "Hello",
			"picture": "http://via.placeholder.com/30x30",
			"date": "2017-07-05T21:11:54-0500",
			"group": 3
		},		
		{
			"messageId": 3,
			"name": "Steven George",
			"userid": 14,
			"message": "Shutup",
			"picture": "http://via.placeholder.com/30x30",
			"date": "2017-07-05T21:11:54-0500",
			"group": 3
		},
		{
			"messageId": 4,
			"name": "Crap Butt",
			"userid": 2,
			"message": "Big head",
			"picture": "http://via.placeholder.com/30x30",
			"date": "2017-07-05T21:11:54-0500",
			"group": 3
		}] 
};

//Array of displayed messages. If it is already in the DB, it should be displayed
let messagesToDisplay = responseData.messages;

class App extends React.Component{
	constructor(){
		super()
		this.sendMessage = this.sendMessage.bind(this);
		this.state = {
			messagesToDisplay: messagesToDisplay
		};
	}
	
	sendMessage(){
		let messageInput = document.getElementById('message-input');
		let messageText = messageInput.value;

		if (messageText != ""){
			
			function AddedMessage(messageId, name, userId, message, picture, date, group){
				this.messageId = messageId;
				this.name = name;
				this.userId = userId;
				this.message = message;
				this.picture = picture;
				this.date = date;
				this.group = group;
			}
			
			let messageToPush = new AddedMessage(undefined, user.fullName, user.userId, messageText, user.picture, undefined, undefined);
			console.log('POSTING: ', messageToPush);

			messagesToDisplay.push(messageToPush);

			//AJAX TO SERVER HERE

			this.setState({messagesToDisplay: messagesToDisplay});

			messageInput.value = "";
			messageText = "";
		} else {
			null;
		}
	}

	render(){
		return(
			<div>
				<section>
					<ChatHistory />
				</section>
				<div>
					<div>
						<input id="message-input" type="text" name="message" />
						<button onClick={this.sendMessage}>Send</button>
					</div>
				</div>
			</div>
		)
	}
}

function Message(props){
	if (props.text){
		return(
			<div>
				<img src={props.picture} />
				<h2>{props.name}</h2>
				<h3>{props.text}</h3>
			</div>
		);
	} else {
		return null;
	}
}

function ChatHistory(props){

	var history = messagesToDisplay.map((value, index) => {
		return(
			<Message 
				text={messagesToDisplay[index].message} 
				name={messagesToDisplay[index].name} 
				picture={messagesToDisplay[index].picture}
			/>
		);
	})
	
	return history;
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);