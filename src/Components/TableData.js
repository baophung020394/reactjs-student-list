import React, { Component } from 'react';

class TableData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageIndex : ''
        };
      
    }
    
    deleteUserClick = (userId) => {
        this.props.deleteUser(userId);
    }
    editUserClick = (userInfo) => {
        this.props.editUser(userInfo);
    }
    paginationClick = (i) => {
        this.props.paginationClick(i);
        // console.log(i);
    }
    pagination = () => {
        const checkRecordset = this.props.students !== undefined;
        let pagination;
        let numberPage;
        let paginationNumber = [];
        let i;
        if (checkRecordset) { 
            pagination = this.props.students.recordset.map((value,key) => { 
                numberPage = (value.TotalItem/value.PageSize > 0 ? value.TotalItem/value.PageSize + 1 : 0 );
                // console.log(numberPage);
               return numberPage;
        })
        for (i = 1; i <= numberPage; i++) {
            paginationNumber.push(<li className="page-item"><a className="page-link" href="javascript:void(0)" onClick={(i) => this.paginationClick(i.target.text)}>{i}</a></li>);
          
        }
        // console.log(paginationNumber);
        return paginationNumber;
      
           
        }
       
    }
    render() {
            
            const checkRecordset = this.props.students !== undefined;
            // console.log(this.props.students);
            let data;
            let pagination;
            if (checkRecordset) {
                 
            data = this.props.students.recordset.map((value,key) => {
                // console.log(value);
                return (
                        <tr key={key} >
                            <td>{value.RowNumber}</td>
                            <td>{value.ID}</td> 
                            <td>{value.StudentName}</td>
                            <td>{value.Row_Version.data}</td>
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
                        <th>Mã Học Sinh</th>
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
                <div className="container">  
                    <ul className="pagination justify-content-center">
                            
                        <li className="page-item"><a className="page-link" href="javascript:void(0);">Previous</a></li>
                        {this.pagination()}                        
                        <li className="page-item"><a className="page-link" href="javascript:void(0);">Next</a></li>
                    </ul>           
                   
                </div>
            </div>
        );
    }
}

export default TableData;