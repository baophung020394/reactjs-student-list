import React, { Component } from 'react';

class Data extends Component {
   
    getStudent = () => {
        fetch('http://172.16.12.30:4000/studies')
        .then(recordset  => recordset.json())
        .then(recordset => this.setState({studies : recordset}))
      }

    componentDidMount() {
        this.getStudent();
    }
    displayRowStudent = () => {
        const checkRecordset = this.state.studies !== undefined;
        let data;
        if (checkRecordset) {
            
            data = this.state.studies.recordset.map((value,key) => {
            console.log(value);
            return (
                <ListStudent key={key} data={value}/>
            )
            })
        } else return null;
    }

    render() {
        return (
          <div></div> 
        );
    }
}

export default Data;