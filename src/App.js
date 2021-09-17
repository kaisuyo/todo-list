import React from 'react';
import './App.css';
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

  render() {
    return (
      <div className="App">
        <div className="App__title purple">TO DO LIST</div>
        <div className="App__body">
          {this.state.columns.map( column => (
            <Column 
              turnOnModal={() => {this.handleModal(column.id)}} 
              key={column.id} total={column.tasks.length} 
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
          />
        }
        
      </div>
    );
  }
}

export default App;
