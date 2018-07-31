import React from 'react';
import ReactDOM from 'react-dom';
import GroupList from './components/group-list.jsx';
import ChatHistory from './components/chat-history.jsx';
import * as api from "./api";

//function getUser(){
//	get details from DB, store data locally in browser so we know who is sending messages
//}

//Simulated response from backend when requesting user details
const user = {
	"userId": 2,
	"firstName": "Mike",
	"lastName": "Carbone",
	"fullName": "Mike Carbone",
	"picture": "http://via.placeholder.com/30x30",
	"groups": [2, 5, 6, 77],
	"mainGroup": 2
};



class App extends React.Component {
	constructor() {
		super();
		this.sendMessage = this.sendMessage.bind(this);
		this.refreshHistoryState = this.refreshHistoryState.bind(this);
		this.componentDidMount
		this.state = {
			messagesToDisplay: '',
			isComponentMounted: false
		};
	}

	sendMessage() {
		const messageInput = document.getElementById('message-input');
		let messageText = messageInput.value;
		let messagesToDisplay = this.state.messagesToDisplay;
		
		if (messageText != "") {

			//Object to use when creating new messages to send to server/chat log array
			function AddedMessage(messageId, name, userId, message, picture, date, group) {
				this.messageId = messageId;
				this.name = name;
				this.userId = userId;
				this.message = message;
				//Remove picture
				this.picture = picture;
				this.date = date;
				this.group = group;
			}

			//Creating new message obj to send to chat log array
			let messageToPush = new AddedMessage(undefined, user.fullName, user.userId, messageText, user.picture, undefined, undefined);
			console.log('POSTING: ', messageToPush);
			
			//Adding the new chat obj to the history log
			messagesToDisplay.push(messageToPush);

			//AJAX TO SERVER HERE

			//Must reset state here so the chat history component knows to update
			this.refreshHistoryState(messagesToDisplay);

			//Clears the message input box and the var holding it
			messageInput.value = "";
			messageText = "";
		} else {
			null;
		}
	}

	refreshHistoryState(newMessages) {
		this.setState({
				messagesToDisplay: newMessages
			},
			function () {
				console.group('Chat log state change!');
				console.log('PASSED DATA: ', newMessages);
				console.log('STATE SHOWING: ', this.state.messagesToDisplay);
				console.groupEnd();
			});
	}

	componentDidMount() {
		let messagesToDisplay;

		//Simulated response from backend when requesting messages

		//how to do use api get functions:
		api.getMessages().then( data => {
			//do whatever with response data
			console.log(data)
		})


		let responseData = {
			"channel": "drexel",
			"messages": [{
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
				}
				//Add all new recieved messages here
			]
		};

		messagesToDisplay = responseData.messages;

		this.refreshHistoryState(messagesToDisplay);
		this.setState({
			isComponentMounted: true
		});
	}

	render() {
		return(
			<div>
				<aside>
					<ul>
						<GroupList onChange={this.refreshHistoryState} />
					</ul>
				</aside>
				<section>
					<ChatHistory isComponentMounted={this.state.isComponentMounted} messagesToDisplay={this.state.messagesToDisplay} />
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

ReactDOM.render( <
	App / > ,
	document.getElementById('root')
);