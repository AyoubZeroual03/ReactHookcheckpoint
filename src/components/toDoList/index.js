import React from "react";
import { ToDoItem } from "../toDoItem";
import { AddToDo } from "../AddTodo";
import { todos } from "../../data";
export class ToDoList extends React.Component {
  state = {
    items: []
  };
  componentDidMount() {
    this.setState({
      items: todos.filter((el) => el.isFinished !== true)
    });
  }
  addTodo = (item) => {
    const itemsCopy = [...this.state.items];
    itemsCopy.push(item);
    this.setState({
      items: itemsCopy
    });
  };
  removeTodo = (id) => {
    const itemsCopy = [...this.state.items];
    const itemsAfterDelete = itemsCopy.filter((el) => el.id !== id);
    this.setState({
      items: itemsAfterDelete
    });
  };
  setCompleted = (id) => {
    const itemsCopy = [...this.state.items];
    const updatedItems = itemsCopy.map((el) => {
      if (el.id === id) {
        return { ...el, isFinished: true };
      }
      return el;
    });
    this.setState({
      items: updatedItems
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center">To Do List</h1>
        <AddToDo addTodo={this.addTodo} />
        {this.state.items ? (
          this.state.items.map((item) => {
            return (
              <ToDoItem
                item={item}
                removeTodo={this.removeTodo}
                setCompleted={this.setCompleted}
                key={item.id}
              />
            );
          })
        ) : (
          <p>there are no items</p>
        )}
      </div>
    );
  }
}
