import React from 'react';
import logo from './img/logo.gif';
import './App.css';
import TaskCreator from './taskcreator';
import Task from './task';

export class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      todos: [{id: 0, text: "Add some more tasks!"}],
      nextID: 1
    };
    this.addTodo = this.addTodo.bind(this);
    this.remTodo = this.remTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);

  }
  addTodo(todoText){

    let todos = this.state.todos.slice();
    let ID = this.state.nextID;
    todos.push({id: this.state.nextID, text: todoText});
    this.setState({
       todos: todos,
       nextID: ++ID
    });
  }
  remTodo(id){
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
  }
  editTodo(id, text){
    const newText = prompt("What should It say instead?", text);
    let todos = this.state.todos.slice();
    for (var i in this.state.todos) {
      if (this.state.todos[i].id === id) {
       todos[i].text = newText;
       this.setState({
         todos: todos
       });
       break;
      }
    }

  }
  render() {
    const numTasks = this.state.todos.length;
    let message = "You currently have " + numTasks + " " + (numTasks === 1 ? "task" : "tasks") + " awaiting";
    if (numTasks === 0) message = "Congratulations, you're done! How about adding more tasks?";
    return (

      <div className="App"> {
        //Idea: Prompt for username, prompt for routine or todo list
      }
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To-Do List / Routine Establishing App</h1>
        </header>
        <title>HI</title>
        {
        // Title Goes here: <Title /> Gets the name of user, and says {USER}'s to-do list/routine
        }
        <p className="App-intro">
          {message}
        </p>
        {
          //Component TaskList Here
        }
        <TaskCreator todoText="default text" addTodo={this.addTodo}/>
        <ul>
          {
            this.state.todos.map((todo) =>{
              return <Task todo={todo} key={todo.id} id={todo.id} remTodo={this.remTodo} editTodo={this.editTodo} />
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
