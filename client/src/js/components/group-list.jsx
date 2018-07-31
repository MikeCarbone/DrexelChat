import GroupListItem from './group-list-item.jsx';

export default class GroupList extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		//Fetch which groups the user is a member of
		//Call from local storage
		let usersGroups;

		//AJAX request details for each channel
		
		//Simulated response from server
		const groupsData = {
			"groups":[
				{
					"groupId": 2,
					"groupName": "Drexel",
					"memberIds": [1, 4, 5, 6]
				},
				{
					"groupId": 5,
					"groupName": "UPenn",
					"memberIds": [4, 7, 10, 86]
				},
				{
					"groupId": 6,
					"groupName": "VR Club",
					"memberIds": [11, 42, 54, 67]
				},
				{
					"groupId": 77,
					"groupName": "DIGM323",
					"memberIds": [16, 43, 51, 63]
				}
			]
		};
		
		//Updating usersGroups to be the response
		usersGroups = groupsData.groups;
		
		//Instantiating each group
		let groups = usersGroups.map((value, index) => {
			return(
				<GroupListItem 
					groupName={usersGroups[index].groupName}
					groupId={usersGroups[index].groupId}
					changeHandler={this.props.onChange}
					key={index.toString()}
				
				/>
			);
		})
		
		return groups;
	}
}