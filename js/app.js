import React from 'react';
import ReactDOM from 'react-dom';

const messages = ['hello', 'hi', 'please'];
let displayedMessages = messages.slice();

//fetch array of previous messages
//display that array
//type out message, click send
//send to db, add to chat log
//refetch chat history
//redisplay messages
//~~~~~SLOW~~~~~

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

class App extends React.Component{
	constructor(){
		super()
		this.sendMessage = this.sendMessage.bind(this);
		this.state = {
			isMessageSent: false,
			passedMessage: "",
			displayedMessages: displayedMessages
		};
	}
	
	sendMessage(){
		console.log('within send');
		let isMessageSent = this.state.isMessageSent;

		if (this.state.isMessageSent){
			this.setState({isMessageSent: false});
		} else {
			let messageInput = document.getElementById('message-input')
			let messageText = messageInput.value;
			
			this.setState({
				isMessageSent: true,
				passedMessage: messageText
			});

			messageInput.value = "";
		}
	}

	render(){
		let isMessageSent = this.state.isMessageSent;
		let Message1;
		
		//THINGS TO DO WHEN MESSAGE IS SENT
		if (isMessageSent){
			Message1 = <Message value={this.state.passedMessage} />;
			displayedMessages.push(this.state.passedMessage);
			//PUSH
			this.setState({
				isMessageSent: false,
				passedMessage: ""
			});
		} else {
			Message1 = null;
		}
		
		return(
			<div>
				<section>
					<ChatHistory historyArray={this.state.displayedMessages} />
				</section>
				<div>
					
					{Message1}
				
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
	if (props.value){
		return(
			<div>
				<img src="http://via.placeholder.com/30x30" />
				<h2>Mike</h2>
				<h3>{props.value}</h3>
			</div>
		);
	} else {
		return null;
	}
}

function ChatHistory(props){
	//console.log('THIS HISTORY: ', props.historyArray);
	var history = props.historyArray.map((value, index) => {
		return(
			<Message value={value}/>
		);
	})
	
	return history;
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);