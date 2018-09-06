import React, { Component } from 'react';

class AddUser extends Component {

    checkStateForm = () => {
        if(this.props.displayForm === true) {
            return (
                <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>
                    <div className="card-header">New User</div>
                    <div className="card-body text-primary">
                    <div className="form-group">
                        <input type="text" className="form-control"  placeholder="User name" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control"  placeholder="Phone" />
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
            )
        }
    }
    render() {
        console.log(this.props.displayForm);
        return (
            <div className="col-3">
                <div className="text-center">
                    {
                        this.checkStateForm()
                    }
                </div>
            </div>
        );
    }
}

export default AddUser;