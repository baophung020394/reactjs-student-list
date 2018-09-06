import React, { Component } from 'react';

class Search extends Component {

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

    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                <div className="btn-group">
                    <input type="text" className="form-control" placeholder="Nhập từ khóa" 
                    />
                    <div className="btn btn-info">
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