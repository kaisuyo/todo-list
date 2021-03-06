import React from "react";
import Task from "./Task";

import './Column.css';
import { Droppable } from "react-beautiful-dnd";

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

        <Droppable droppableId={this.props.id}>
          {
            provided => (
              <div className="column__body"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {this.props.tasks.map((task, index) => (
                  <Task 
                    delete={() => {this.props.delete(task.id)}} 
                    edit={(newContent) => {this.props.edit(task.id, newContent)}}
                    index={index}
                    id={task.id}
                    key={task.id} 
                    time={task.time} 
                    content={task.content} 
                  />
                ))}
                {provided.placeholder}
              </div>
            )
          }
        </Droppable>
      </div>
    )
  }
}

export default Column;