export default class GroupListItem extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(e){
		let clickedGroupId = e.currentTarget.dataset.groupId
		console.log('ID of group clicked: ', clickedGroupId);
		//AJAX request for messages from clicked group
		
		//Simulated response
		let fakeResponse = {
			"channel": "UPENN",
			"messages": [
				{
					"messageId": 1,
					"name": "lknln",
					"userid": 12,
					"message": "Hello",
					"picture": "http://via.placeholder.com/30x30",
					"date": "2017-07-05T21:11:54-0500",
					"group": 3
				},		
				{
					"messageId": 3,
					"name": "kkkkkkk",
					"userid": 14,
					"message": "Shutup",
					"picture": "http://via.placeholder.com/30x30",
					"date": "2017-07-05T21:11:54-0500",
					"group": 3
				},
				{
					"messageId": 4,
					"name": "Crap",
					"userid": 2,
					"message": "Big head",
					"picture": "http://via.placeholder.com/30x30",
					"date": "2017-07-05T21:11:54-0500",
					"group": 3
				}
			] 
		};

		this.props.changeHandler(fakeResponse.messages);
	}
	
	render(){
		return(
			<li 
				onClick={this.handleClick.bind(this)} 
				className="group-list-item" 
				data-group-id={this.props.groupId}>
					{this.props.groupName}
			</li>
		);
	}
}