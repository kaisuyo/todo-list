import React from 'react';
import './App.css';

import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

import { v4 as uuidv4 } from 'uuid';

import Column from './components/Column';
import Modal from './components/Modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayModal: false,
      columns: [
        {id: 'td', title: 'TO DO', tasks: [{id: 1, content: 'Demo task', time: '16/09/2021, 9:25:35 AM'}]},
        {id: 'ip', title: 'IN PROGRESS', tasks: []},
        {id: 'dn', title: 'DONE', tasks: []}
      ],
      selectedColumn: '',
    };

  }

  handleModal(id) {
    this.setState({isDisplayModal: !this.state.isDisplayModal, selectedColumn: id});
  }

  handleChangeSelectedColumn(columnId) {
    this.setState({selectedColumn: columnId});
  }

  handleAddNewTask(evt, newTaskContent) {
    evt.preventDefault();
    if (newTaskContent.trim() === '') return toastr.warning("Pleace enter your task", "Notice", {timeOut: 2000});

    const newTask = {
      id: uuidv4(),
      content: newTaskContent,
      time: new Date().toLocaleString(),
    }
    let { columns, selectedColumn } = this.state;
    let selectedColumnIndex = columns.findIndex(col => col.id === selectedColumn);
    columns[selectedColumnIndex].tasks.push(newTask);

    this.setState({
      isDisplayModal: false, 
      columns,
    });
  }

  handleDeleteTask(columnID, taskID) {
    let { columns } = this.state;
    let selectedColumnIndex = columns.findIndex(col => col.id === columnID);
    let taksDeleteIndex = columns[selectedColumnIndex].tasks.findIndex(task => task.id === taskID);
    columns[selectedColumnIndex].tasks.splice(taksDeleteIndex, 1);

    this.setState({
      isDisplayModal: false, 
      columns,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App__title purple">TO DO LIST</div>
        <div className="App__body">
          {this.state.columns.map( column => (
            <Column 
              turnOnModal={() => {this.handleModal(column.id)}} 
              delete={(taskID) => this.handleDeleteTask(column.id, taskID)}
              key={column.id} 
              total={column.tasks.length} 
              title={column.title} 
              tasks={column.tasks} 
            />
          ))}
        </div>

        {this.state.isDisplayModal && 
          <Modal 
            selected={this.state.selectedColumn} 
            changeColumn={(newColumnID) => this.handleChangeSelectedColumn(newColumnID)}
            turnOffModal ={() => this.handleModal("")}
            handleAddNewTask={((evt, newTaskContent) => {this.handleAddNewTask(evt, newTaskContent)})}
          />
        }
        
      </div>
    );
  }
}

export default App;
