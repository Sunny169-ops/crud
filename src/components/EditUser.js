import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getUser} from '../Reducers/Asyncthunk';
import {updateData} from '../Reducers/Asyncthunk'
import {history} from '../Reducers/History'

 class EditUser extends Component {

   componentDidMount() {                                                         
    this.props.getUser(this.props.match.params.id);
  }

   onChangeHandler =(e) =>{
    this.setState({
      [e.target.name]: e.target.value });
   }

   onSubmitHandler =(e) =>{
     e.preventDefault();
     const id = this.props.users.id;
     const name = this.state.name ? this.state.name : this.props.users.name;
     const  username = this.state. username ? this.state. username : this.props.users.username;
     const   email = this.state. email ? this.state. email : this.props.users.email;
     const data = {id: id, name: name, username: username,email:email }
     this.props.updateData(data);
     history.push("/");
   }



    render() {
        return (
            <div className="container">
            <form onSubmit={this.onSubmitHandler}>
  <div className="form-group">
    <label>Title</label>
    <input type="text" className="form-control" name="name" defaultValue={this.props.users.name} onChange={this.onChangeHandler} placeholder="Enter name"/>
  </div>
  <div className="form-group">
    <label >Body</label>
    <input type="text" className="form-control" name="username" defaultValue={this.props.users.username} onChange={this.onChangeHandler} placeholder=" Enter username"/>
  </div>
  <div className="form-group">
    <label >Body</label>
    <input type="text" className="form-control" name="email" defaultValue={this.props.users.email} onChange={this.onChangeHandler} placeholder=" Enter email"/>
  </div>
  <button type="submit" className="btn btn-outline-warning">Update</button>
</form>     
        </div>
        )
    }
}

const mapStateToProps = (state) => ({ users: state.users });
const mapDispatchToProps = {getUser,updateData}

export default connect(mapStateToProps,mapDispatchToProps) (EditUser);
