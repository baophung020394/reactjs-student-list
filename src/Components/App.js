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
      userEditObject : {},
      pageIndex : 1
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
  // paginationClick = (i) => {
  //   console.log('t click đc rồi' + i);
  // }
  /**
   * Function fetch list student
   */
  paginationClick = (i) => {
   
     fetch('http://172.16.12.30:4000/studies', {
      method: 'POST',
      headers: {  
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'pageIndex': i
      })
    }) 
    .then(recordset  => recordset.json())
    .then(recordset => this.setState({studies : recordset}))
   
  }
 search = async (KeyWord) => {
    // console.log(KeyWord);
   await fetch('http://172.16.12.30:4000/studies', {
      method: 'POST',
      headers: {  
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'KeyWord': KeyWord['search']
      })
    }) 
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
    userInformation.name = '';
    if(this.state.userObj.recordset[0]['Message'] === "Insert student success") {
      this.paginationClick();
    }else {
      alert (this.state.userObj.recordset[0]['Message']);
    }
  }
  /**
   * Function Delete User
   */
  deleteUser = async (userId) => {
    console.log(userId);
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
      this.paginationClick();
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
  // console.log(userInfo);
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
        this.paginationClick();
      }else {
        alert (this.state.userEditObject.recordset[0]['Message']);
      }
    } else {
      alert ('Id invalid');
    }
    
  }
  componentDidMount() {
      this.paginationClick();
  }

  render() {
    if(this.state.studies !== undefined){
      // console.log(this.state.studies).recordset);
    }
    return (
      <div>
         <Header />
         <div className="searchForm">
            <div className="container">
              <div className="row">
                <Search 
                  search={(KeyWord) => this.search(KeyWord)}
                  submitUpdateUser = {(userInfo) => this.submitUpdateUser(userInfo)}
                  editUser = {(userInfo) => this.editUser(userInfo)}
                  userEditObject = {() => this.state.userEditObject}
                  con={() => this.changeStateForm()} 
                  displayForm={this.state.displayForm}/>
                <TableData 
                  paginationClick = {(i) => this.paginationClick(i)}
                  editUser = {(userInfo) => this.editUser(userInfo)}
                  students={this.state.studies}
                  deleteUser={(userInformation) => this.deleteUser(userInformation)}
                />
                <AddUser 
                  displayForm={this.state.displayForm}  
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
