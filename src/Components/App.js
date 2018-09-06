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
      displayForm : true
    }
   
  }
  changeStateForm = () => {
    this.setState({
      displayForm: !this.state.displayForm
    });
  }
  render() {
    return (
      <div>
         <Header />
         <div className="searchForm">
            <div className="container">
              <div className="row">
                <Search con={() => this.changeStateForm()} displayForm={this.state.displayForm}/>
                <TableData />
                <AddUser displayForm={this.state.displayForm}  />
              </div>
            </div>
         </div>
      </div>
    );
  }
}

export default App;
