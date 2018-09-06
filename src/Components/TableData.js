import React, { Component } from 'react';

class TableData extends Component {
    render() {
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
                    <tr>
                    <td >1</td>
                    <td>Trần Đức Lương</td>
                    <td>098899887722</td>
                    <td>Moderator</td>
                    <td>
                        <div className="btn-group">
                        <div className="btn btn-warning sua">
                            <i className="fa fa-edit"> Edit </i>
                        </div>
                        <div className="btn btn-danger xoa">
                            <i className="fa fa-trash-o"> Delete</i>
                        </div>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <td >1</td>
                    <td>Trần Đức Lương</td>
                    <td>098899887722</td>
                    <td>Moderator</td>
                    <td>
                        <div className="btn-group">
                        <div className="btn btn-warning sua">
                            <i className="fa fa-edit"> Edit </i>
                        </div>
                        <div className="btn btn-danger xoa">
                            <i className="fa fa-trash-o"> Delete</i>
                        </div>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <td >1</td>
                    <td>Trần Đức Lương</td>
                    <td>098899887722</td>
                    <td>Moderator</td>
                    <td>
                        <div className="btn-group">
                        <div className="btn btn-warning sua">
                            <i className="fa fa-edit"> Edit </i>
                        </div>
                        <div className="btn btn-danger xoa">
                            <i className="fa fa-trash-o"> Delete</i>
                        </div>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <td >1</td>
                    <td>Trần Đức Lương</td>
                    <td>098899887722</td>
                    <td>Moderator</td>
                    <td>
                        <div className="btn-group">
                        <div className="btn btn-warning sua">
                            <i className="fa fa-edit"> Edit </i>
                        </div>
                        <div className="btn btn-danger xoa">
                            <i className="fa fa-trash-o"> Delete</i>
                        </div>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <td >1</td>
                    <td>Trần Đức Lương</td>
                    <td>098899887722</td>
                    <td>Moderator</td>
                    <td>
                        <div className="btn-group">
                        <div className="btn btn-warning sua">
                            <i className="fa fa-edit"> Edit </i>
                        </div>
                        <div className="btn btn-danger xoa">
                            <i className="fa fa-trash-o"> Delete</i>
                        </div>
                        </div>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;