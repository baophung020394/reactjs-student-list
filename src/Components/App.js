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
      userObj : '',
      userEditObject : {}
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
   * Function Insert New User
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
    if(this.state.userObj.recordset[0]['Message'] === "Insert student success") {
      this.getStudent();
    }else {
      alert (this.state.userObj.recordset[0]['Message']);
    }
  }
  /**
   * Function Delete User
   */
  deleteUser = async (userId) => {
    // console.log(userId);
    await fetch('http://172.16.12.30:4000/deleteuser', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'userId': userId
      })
    }) 
    .then(recordset  => recordset.json())
    .then(recordset => this.setState({userObj : recordset}))

    if(this.state.userObj.recordset[0]['Message'] === "Delete student success") {
      this.getStudent();
    }else {
      alert (this.state.userObj.recordset[0]['Message']);
    }
    
  }

  /**
   * Function Edit User
   */
  editUser = (userInfo) => {
    this.setState({
        userEditObject : userInfo
    });
    console.log(userInfo);
  }
  submitUpdateUser = async (userInfo) => {
    if(userInfo !== null) {
      await fetch('http://172.16.12.30:4000/edituser', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'userId' : (userInfo.id !== undefined ? userInfo.id : 0 ),
          'userName' : userInfo.name,
          'rowVersion' : userInfo.rowVersion
        })
      }) 
      .then(recordset  => recordset.json())
      .then(recordset => this.setState({userEditObject : recordset}))
      if(this.state.userEditObject.recordset[0]['Message'] === "Update student success") {
        this.getStudent();
      }else {
        alert (this.state.userEditObject.recordset[0]['Message']);
      }
    } else {
      alert ('Id invalid');
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
                <Search 
                  submitUpdateUser = {(userInfo) => this.submitUpdateUser(userInfo)}
                  editUser = {(userInfo) => this.editUser(userInfo)}
                  userEditObject = {() => this.state.userEditObject}
                  con={() => this.changeStateForm()} 
                  displayForm={this.state.displayForm}/>
                <TableData 
                  editUser = {(userInfo) => this.editUser(userInfo)}
                  students={this.state.studies}
                  deleteUser={(userInformation) => this.deleteUser(userInformation)}
                />
                <AddUser displayForm={this.state.displayForm}  
                  createNewUser = {(userId) => {this.createNewUser(userId)}}
                />
              </div>
            </div>
         </div>
      </div>
    );
  }
}

export default App;
