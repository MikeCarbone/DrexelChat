import Message from './message.jsx';

export default class ChatHistory extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		let isAppMounted = this.props.isComponentMounted;
		if(isAppMounted){
			console.log('Is app mounted?: ', this.props.isComponentMounted);
			let messagesToDisplay = this.props.messagesToDisplay;
			let history = messagesToDisplay.map((value, index) => {
				return(
					<Message 
						text={messagesToDisplay[index].message} 
						name={messagesToDisplay[index].name} 
						picture={messagesToDisplay[index].picture}
						key={index.toString()}
					/>
				);
			})

			console.log('Chat loaded.');

			return history;
		} 
		else {
			//Things to do while log is blank
			console.log('Is app mounted?: ', this.props.isComponentMounted);
			console.log('Loading chat...');
			let history = <h1>Loading Chat...</h1>;

			return history;
		}		
	}
}