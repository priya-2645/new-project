import React, { Component } from 'react';
import './App.css';
import Select from 'react-select';

const options = [
  { value: 'Inprogress', label: 'Inprogress' },
  { value: 'Completed', label: 'Completed' },
  
];

class App extends Component {

  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <div className="App" >
        <h3>status</h3>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    );
  }

}

export default App;