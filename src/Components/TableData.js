import React, { Component } from 'react';

class TableData extends Component {
    constructor(props) {
        super(props);
    }
    
    deleteUserClick = (userId) => {
        this.props.deleteUser(userId);
    }
    editUserClick = (userInfo) => {
        this.props.editUser(userInfo);
    }
    render() {
            const checkRecordset = this.props.students !== undefined;
            // console.log(this.props.students);
            let data;
            if (checkRecordset) {
                 
            data = this.props.students.recordset.map((value,key) => {
              
                return (
                        <tr key={key} >
                            <td>{value.ID}</td> 
                            <td>{value.Name}</td>
                            <td>098899887722</td>
                            <td>Moderator</td>
                            <td>
                                <div className="btn-group">
                                <div className="btn btn-warning sua"
                                    onClick = {(userInfo) => this.props.editUser(value)}    
                                >
                                    <i className="fa fa-edit"> Edit </i>
                                </div>
                                <div className="btn btn-danger xoa" 
                                    onClick={(userId) => {if(window.confirm('Are you sure delete?')) this.deleteUserClick(value.ID)}}>
                                    <i className="fa fa-trash-o"> Delete</i>
                                </div>
                                </div>
                            </td>
                        </tr>
                    )
                })
            } else return null;
            
        return (
            <div className="col-9">
                <table className="table table-striped table-hover table-{1:striped|sm|bordered|hover|inverse}">
                <thead>
                    <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Điện thoại</th>
                    <th>Quyền</th>
                    <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data
                    }
                </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;