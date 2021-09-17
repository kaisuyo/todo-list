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
      <Droppable droppableId={this.props.id}>
        {
          provided => (
            <div className="column__container"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
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
              </div>
              {provided.placeholder}
            </div>
          )
        }
      </Droppable>
    )
  }
}

export default Column;