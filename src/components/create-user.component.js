import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

class CreateUser extends Component{
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = ({
            username: ''
        });
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username
        }

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data))
        
        console.log(user);
        // window.location = '/';
    }

    render(){
        return(
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Username: </label>
                            <input
                                type='text'
                                required
                                className='form-control'
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                            />
                    </div>
                    <div className='form-group'>
                        <input
                            type='submit'
                            className='btn btn-primary'
                            value='Create User'
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateUser;