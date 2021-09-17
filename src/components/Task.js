import React from "react";
import './Task.css';

class Task extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="task__container">
        <div className="task__header">
          <i className="fal fa-calendar-alt"></i>
          <span>{this.props.time}</span>
        </div>
        <div className="task__body">
          <div className="task__content">{this.props.content}</div>
          <div className="task__option">
            <button className="btn btn_round purple"><i className="far fa-edit"></i></button>
            <button className="btn btn_round red" onClick={() => {this.props.delete()}}><i className="far fa-trash-alt"></i></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;