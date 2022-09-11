import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./style.css";
export class AddToDo extends React.Component {
  state = {
    todo: ""
  };
  constructor(props) {
    super();
  }

  onChangeTodoText = (e) => {
    this.setState({
      todo: e.target.value
    });
  };
  onAddPressed = () => {
    const item = { id: uuidv4(), title: this.state.todo, isFinished: false };
    this.props.addTodo(item);
  };
  render() {
    return (
      <div className="form-container d-flex">
        <input
          className="form-control"
          onChange={(e) => this.onChangeTodoText(e)}
          type="text"
          placeholder="todo"
        />
        <button className="btn btn-primary" onClick={this.onAddPressed}>
          add
        </button>
      </div>
    );
  }
}