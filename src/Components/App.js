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
      student : '',
      userObj : ''
    }
   
  }
  /**
   * Change state to display form New User
   */
  changeStateForm = () => {
    this.setState({
      displayForm: !this.state.displayForm
    });
  }
  /**
   * Function fetch list student
   */
  getStudent = () => {
    fetch('http://172.16.12.30:4000/studies')
    .then(recordset  => recordset.json())
    .then(recordset => this.setState({studies : recordset}))
  }

  /**
   * Function New User
   */
  createNewUser = async (userInformation) => {
    await fetch('http://172.16.12.30:4000/adduser', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'userName': userInformation.name
      })
    }) 
    .then(recordset  => recordset.json())
    .then(recordset => this.setState({userObj : recordset}))
    // console.log(this.state.userObj.recordset[0]);
    if(this.state.userObj.recordset[0]['Message'] === "Insert Success") {
      this.getStudent();
    }else {
      alert (this.state.userObj.recordset[0]['Message']);
    }
  }

  componentDidMount() {
      this.getStudent();
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
                <AddUser displayForm={this.state.displayForm}  
                  createNewUser = {(userInformation) => {this.createNewUser(userInformation)}}
                />
              </div>
            </div>
         </div>
      </div>
    );
  }
}

export default App;
