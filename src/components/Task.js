import React from "react";
import { Draggable } from "react-beautiful-dnd";
import './Task.css';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isEditing: false};
    this.taskContent = React.createRef();
  }

  handleEditingMode() {
    this.setState({isEditing: !this.state.isEditing});
  }

  render() {
    return (
      <Draggable
        index={this.props.index}
        draggableId={this.props.id.toString()}
        isDragDisabled={this.state.isEditing}
      >
        {
          provided => (
            <div className="Task"
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              {
                !this.state.isEditing ? 
                <div className="task__container">
                  <div className="task__header">
                    <i className="fal fa-calendar-alt"></i>
                    <span>{this.props.time}</span>
                  </div>
                  <div className="task__body">
                    <div className="task__content">
                      {this.props.content}
                    </div>
                    <div className="task__option">
                      <button className="btn btn_round purple" onClick={() => {this.handleEditingMode()}}><i className="far fa-edit"></i></button>
                      <button className="btn btn_round red" onClick={() => {this.props.delete()}}><i className="far fa-trash-alt"></i></button>
                    </div>
                  </div> 
                </div>
                : 
                <form 
                  onSubmit={(e) =>{
                    e.preventDefault();
                    this.props.edit(this.taskContent.current.value); 
                    this.handleEditingMode();
                  }}
                >
                <div className="task__overlay" onClick={() => {this.handleEditingMode()}}></div>
                <div className="task__container" style={{position: 'relative', zIndex: 200}}>
                  <div className="task__header">
                    <i className="fal fa-calendar-alt"></i>
                    <span>{this.props.time}</span>
                  </div>
                  <div className="task__body">
                    <div className="task__content">
                      <input type="text" ref={this.taskContent} defaultValue={this.props.content} autoFocus={true} required />
                    </div>
                    <div className="task__option">
                      <button type="submit" className="btn btn_round success" 
                        onClick={() => {
                          this.props.edit(this.taskContent.current.value); 
                          this.handleEditingMode()
                        }}><i className="fas fa-check"></i>
                      </button>
                      <button className="btn btn_round secondary" onClick={() => {this.handleEditingMode()}}><i className="fas fa-ban"></i></button>
                    </div>
                  </div>
                </div>
                </form>
              }
            </div>
          )
        }
      </Draggable>
    );
  }
}

export default Task;