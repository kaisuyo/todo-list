import React from "react";
import Task from "./Task";

import './Column.css';

class Column extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="column__container">
        <div className="column__header">
          <div className="column__header__left">
            <button className="btn btn_purple btn_round">{this.props.total}</button>
            <span className="column__header__title">{this.props.title}</span>
          </div>
          <div className="column__header__right">
            <button className="btn btn_purple" onClick={this.props.turnOnModal}>+ New task</button>
          </div>
        </div>

        <div className="column__body">
          {this.props.tasks.map(task => (
              <Task delete={() => {this.props.delete(task.id)}} key={task.id} time={task.time} content={task.content} />
            ))
          }
        </div>
      </div>
    )
  }
}

export default Column;