import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container text-center">
                        <h1 className="display-3">Quản lý thành viên bằng Reactjs</h1>
                        <p className="lead">
                        với dữ liệu json
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <div className="btn-group">
                            <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Nhập từ khóa" style={{width: 600}} />
                            <div className="btn btn-info">
                                Tìm kiếm
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-12">
                        <hr />
                    </div>
                </div>
            </div>
          
        );
    }
}

export default Header;