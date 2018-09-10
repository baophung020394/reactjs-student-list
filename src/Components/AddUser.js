import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : "",
            name : "",
            tel : "",
            permission : ""
        }
    }
    
    isChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name] : value
        });

    }

    checkStateForm = () => {
        if(this.props.displayForm === true) {
            return (
                <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>
                    <div className="card-header">New User</div>
                    <div className="card-body text-primary">
                    <div className="form-group">
                        <input name="name" type="text" className="form-control"  placeholder="User name" 
                            onChange={(e) => this.isChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input name="tel" type="text" className="form-control"  placeholder="Phone" 
                            onChange={(e) => this.isChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <select name="permission" className="custom-select" required 
                            onChange={(e) => this.isChange(e)}
                        >
                        <option value>--Chọn--</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Modrator</option>
                        <option value={3}>Normal</option>
                        </select>
                        <div className="invalid-feedback">Example invalid custom select feedback</div>
                    </div>
                    <div className="form-group">
                        <div className="btn btn-block btn-primary" 
                            onClick={(userInformation) => this.props.createNewUser(this.state)}
                        >
                        New
                        </div>
                    </div>
                    </div>
                </div>
            )
        }
    }
    render() {
        // console.log(this.state);
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