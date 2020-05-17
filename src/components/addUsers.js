import React, { Component } from 'react';
import { connect } from 'react-redux';
import {post} from '../Reducers/Asyncthunk';
import {history} from '../Reducers/History'

 class addUsers extends Component {
   constructor(){
     super();
     this.state ={
       name : "",
       username : "",
       email:""

     }
   }

   onChangeHandler =(e) =>{
    this.setState({
      [e.target.name]: e.target.value });
   }

   onSubmitHandler =(e) =>{
     e.preventDefault();
     this.props.post(this.state);
     history.push("/");
   }



    render() {

      const {name, username, email} = this.state
        return (
            <div className="container">
            <form onSubmit={this.onSubmitHandler}>
  <div className="form-group">
    <label>Title</label>
    <input type="text" className="form-control" name="name" value={name} onChange={this.onChangeHandler} placeholder="Enter name"/>
  </div>
  <div className="form-group">
    <label >Body</label>
    <input type="text" className="form-control" name="username" value={username} onChange={this.onChangeHandler} placeholder=" Enter username"/>
  </div>
  <div className="form-group">
    <label >Body</label>
    <input type="text" className="form-control" name="email" value={email} onChange={this.onChangeHandler} placeholder=" Enter email"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            
        </div>
        )
    }
}
const mapDispatchToProps = {post}

export default connect(null,mapDispatchToProps) (addUsers);
