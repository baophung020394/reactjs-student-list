import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
    }
    isChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            id : this.props.userEditObject().ID,
            rowVersion : this.props.userEditObject().Row_Version,
            [name] : value
        });
    }
    showButton = () => {
        if(this.props.displayForm === true) {
            return (
                <div className="btn btn-block btn-outline-secondary" onClick={()=> this.props.con()}>Đóng lại</div>
            )
        }else {
            return (
                <div className="btn btn-block btn-outline-info" onClick={()=> this.props.con()}>Thêm mới</div>
            )
        }
    }
    isChangeSearch = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name] : value
        });
    }
    clickSearch = (KeyWord) => {
        this.props.search(KeyWord);
        
    }
    render() {
        // console.log(this.state);
        // console.log(this.props.userEditObject().Row_Version);
        return (
            <div className="col-12">
                <div className="row">
                <div className="col-12">
                        <form method="post">
                            <div className="card text-white bg-warning mb-3">
                                <div className="card-header text-center">Edit User</div>
                                <div className="card-body text-primary">
                                <div className="form-group">
                                    <input type="text" className="form-control" name="name"  placeholder="User name" 
                                        defaultValue={this.props.userEditObject().StudentName}
                                        onChange = {(e) => this.isChange(e)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="tel" placeholder="Phone" 
                                        // defaultValue={this.props.userEditObject.tel}
                                    />
                                </div>
                                <div className="form-group">
                                    <select className="custom-select" required name="permission"
                                        // defaultValue={this.props.userEditObject.permission}
                                    >
                                        <option value>--Chọn--</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Modrator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                    <div className="invalid-feedback">Example invalid custom select feedback</div>
                                </div>
                                <div className="form-group">
                                    <input type="reset" className="btn btn-block btn-danger"
                                        onClick={(userInfo) => this.props.submitUpdateUser(this.state)}
                                    value="Edit"
                                    />
                                </div>
                                </div>
                            </div>
                            </form>
                        </div>
                </div>
                <div className="form-group">
                <div className="btn-group">
                    <input type="text" className="form-control" placeholder="Nhập từ khóa" name="search"
                        onChange={(e) => this.isChangeSearch(e)}
                    />
                    <div className="btn btn-info"
                        onClick={(KeyWord) => this.clickSearch(this.state)}
                    >
                    Tìm kiếm
                    </div>
                </div>

                    <div className="btn-group1 mt-2">
                        {
                            this.showButton()
                        }
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default Search;