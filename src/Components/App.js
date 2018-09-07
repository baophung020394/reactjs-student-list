import React, { Component } from 'react';
import './../Css/App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm : true,
      students: null
    }
   
  }
  changeStateForm = () => {
    this.setState({
      displayForm: !this.state.displayForm
    });
  }
  getStudent = () => {
    fetch('http://172.16.12.30:4000/studies')
    .then(recordset  => recordset.json())
    .then(recordset => this.setState({studies : recordset}))
  }

  componentDidMount() {
      this.getStudent();
    // fetch('http://172.16.12.30:4000/studies')
    // .then(recordset  => recordset.json())
    // .then(recordset => this.setState({studies : recordset}))
  }

  render() {
    return (
      <div>
         <Header />
         <div className="searchForm">
            <div className="container">
              <div className="row">
                <Search con={() => this.changeStateForm()} displayForm={this.state.displayForm}/>
                <TableData students={this.state.studies}/>
                <AddUser displayForm={this.state.displayForm}  />
              </div>
            </div>
         </div>
      </div>
    );
  }
}

export default App;
