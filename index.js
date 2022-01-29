class ToDoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {is_done: false};
	}


	finishTask = () => {
		if (!this.state.is_done) {
			this.setState({is_done: true});
		}
	}

	render() {
		const doneStyle = {textDecoration: 'line-through', color: 'grey'};
		if (this.state.is_done) {
			return (
				<li style={doneStyle}>
					<button disabled>Done</button>
					{this.props.task}
				</li>
			);
		} else {
			return (
				<li>
					<button onClick={this.finishTask}>Done</button>
					{this.props.task}
				</li>
			);
		}
	}
}	

class ToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			to_do_list: ['Finish this test', 'Get hired', 'Change the world']
		};
	}

	addNewTask = () => {
		if (document.getElementById("newtask").value.length >= 3) {
			let newtask = document.getElementById("newtask").value;
			let newtasklist = this.state.to_do_list;
			newtasklist.push(newtask);
			document.getElementById("newtask").value = "";
			this.setState({newtasklist});
		}
	}

	render() {
		return (
			<div>
				<h2>Add a new task to your to-do list</h2>
				<input id="newtask" type="text" />
				<button id="newtask-btn" onClick={this.addNewTask}>Add</button>
				<ul>
					{this.state.to_do_list.map((task_text) =>
						<ToDoItem task={task_text} />
					)}
				</ul>
			</div>
		);
	}
}

ReactDOM.render(
	<ToDoList/>,
	document.getElementById('root')
);