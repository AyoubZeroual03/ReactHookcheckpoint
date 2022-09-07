import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
export class ToDoItem extends React.Component {
  constructor(props) {
    super();
  }
  onRemovePressed = (id) => {
    this.props.removeTodo(id);
  };
  render() {
    return (
      <div className="card">
        <div className="card-body d-flex justify-content-between">
          <h5 className="card-title">{this.props.item.title}</h5>
          <div>
            {!this.props.item.isFinished && (
              <button
                className="btn btn-success"
                onClick={() => this.props.setCompleted(this.props.item.id)}
              >
                <FontAwesomeIcon icon={faCheck} />
              </button>
            )}
            <button
              className="btn btn-danger"
              onClick={() => this.onRemovePressed(this.props.item.id)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
