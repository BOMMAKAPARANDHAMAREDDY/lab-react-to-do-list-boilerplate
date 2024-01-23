import { Component } from "react";
import "../components/Todo.css";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      inputText: " ",
      todos: [],
    };
  }

  handleChange = (event) => {
    let userInput = event.target.value;
    this.setState({ inputText: userInput });
  };

  handleClick = () => {
    this.setState({
      ...this.state,
      todos: [...this.state.todos, this.state.inputText],
      inputText: "",
    });
  };

  handleUpdates = (index) => {
    let updateInput = prompt("update todo....!!!");

    let filterTodo = this.state.todos.map((el, i) => {
      if (i == index) {
        return updateInput;
      }
      return el;
    });
    this.setState({ ...this.state, todos: filterTodo });
  };

  handleDelete = (index) => {
    let todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({ ...this.state, todos });
  };

  render() {
    return (
      <>
        <h1>Todo Application</h1>
        <div className="main-cointainer">
          <div className="addTodo">
            <input
              type="text"
              placeholder="What's on u'r mind 🤔"
              onChange={this.handleChange}
              value={this.state.inputText}
            />
            <button onClick={this.handleClick}>Add Todo</button>
          </div>

          {this.state.todos.map((el, i) => {
            return (
              <div className="afterAdding" key={i}>
                <p>{el}</p>
                <button onClick={() => this.handleUpdates(i)}>Update</button>
                <button onClick={() => this.handleDelete(i)}>Delete</button>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Todo;
