import React from "react";
import './Modal.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.taskContent = React.createRef();
  }
  
  render() {
    return (
      <form className="modal" onSubmit={(e) => this.props.handleAddNewTask(e, this.taskContent.current.value)}>
        <div className="overlay" onClick={() => this.props.turnOffModal()}></div>
        <div className="modal__container">
          <h4 className="modal__header purple">
            CREATE NEW TASK
          </h4>
          <hr/>
          <div className="modal__body">
            <div className="modal__radio">
              <div>
                <input onChange={() => this.props.changeColumn("td")} checked={this.props.selected === "td"} type="radio" name="type" id="td"/>
                <label htmlFor="td">TODO</label>
              </div>
              <div>
                <input onChange={() => this.props.changeColumn("ip")} checked={this.props.selected === "ip"} type="radio" name="type" id="ip"/>
                <label htmlFor="ip">IN PROGRESS</label>
              </div>
              <div>
                <input onChange={() => this.props.changeColumn("dn")} checked={this.props.selected === "dn"} type="radio" name="type" id="dn"/>
                <label htmlFor="dn">DONE</label>
              </div>
            </div>
            <div className="modal__input">
              <input type="text" ref={this.taskContent} placeholder="Enter your task..." autoFocus required></input>
            </div>
          </div>
          <div className="modal__btn">
            <button type="submit" className="btn btn_purple">Save</button>
            <button className="btn btn_outline" onClick={() => this.props.turnOffModal()}>Cancel</button>
          </div>
        </div>
      </form>
    )
  }
}

export default Modal;