import React from 'react';
import './App.css';


export class TaskCreator extends React.Component{
	constructor(props) {
	    super(props);
	 	this.handleChange = this.handleChange.bind(this);
	    this.addTodo = this.addTodo.bind(this);
	    this.state = {
	    	value: ''
	    };
	}
	
	addTodo(todo) {
		if (todo.length > 0) {
			this.props.addTodo(todo);
			this.setState({
				value: '' 
			});
		}
	    
	}
	handleChange(e){
		this.setState({
			value: e.target.value 
		});
	}
	render() {
		return (
			<div className="creator">
				<input  className="inputter" type="text" value={this.state.value} placeholder="type your task here..." onChange={this.handleChange} />
				<button className="addTodo" type="Submit" onClick={() => this.addTodo(this.state.value)}>Add Task</button>
			</div>

		);
	}
}
export default TaskCreator;