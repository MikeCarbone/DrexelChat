export default class Message extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		if (this.props.text){
			return(
				<div>
					<img src={this.props.picture} />
					<h2>{this.props.name}</h2>
					<h3>{this.props.text}</h3>
				</div>
			);
		} else {
			return null;
		}
	}
}