import React, { Component } from 'react';

class ListStudent extends Component {
    render() {
        return (
            <div className="row">
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
                        <td scope="row">1</td>
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
                        <td scope="row">1</td>
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
                        <td scope="row">1</td>
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
                        <td scope="row">1</td>
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
                        <td scope="row">1</td>
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
                </div> {/* End col 9 */}
                <div className="col-3">
                    <div className="text-center">
                    <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>
                        <div className="card-header">New User</div>
                        <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="User name" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Phone" />
                        </div>
                        <div className="form-group">
                            <select className="custom-select" required>
                            <option value>--Chọn--</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Modrator</option>
                            <option value={3}>Normal</option>
                            </select>
                            <div className="invalid-feedback">Example invalid custom select feedback</div>
                        </div>
                        <div className="form-group">
                            <div className="btn btn-block btn-primary">
                            New
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div> {/* End col 3 */}
                </div>

        );
    }
}

export default ListStudent;