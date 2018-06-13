import React from 'react';
import './App.css';

export class Task extends React.Component{
	remTodo(id){
		this.props.remTodo(id);
	}
	editTodo(id, text){
		this.props.editTodo(id, text);
	}
	render() {
		return (
			<div className="task">
				<button className="editTodo" onClick={(e) => this.editTodo(this.props.id, this.props.todo.text)}>
				✎ Edit
				</button>
				<div className="itemWrap">
					<span className="todo">{this.props.todo.text}</span>
				</div>
				<button className="remTodo" onClick={(e) => this.remTodo(this.props.id)}>
				✔ complete
				</button>
			</div>
		);
	}
	
}
export default Task;