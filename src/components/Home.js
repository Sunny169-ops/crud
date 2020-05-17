import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {getData} from '../Reducers/Asyncthunk';
import {remove} from '../Reducers/Asyncthunk';



 class Home extends Component {
    
     componentDidMount(){
         this.props.getData();
         
     } 
    render() {
       
        return (
            <div className="container">
                <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">username</th>
      <th scope="col">email</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
        { this.props && this.props.users.length > 0 ?
         this.props.users.map((user , id) =>(
    <tr>
        <th scope="row">{id + 1}</th>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>
            <button className="btn btn-primary mr-2">view</button>
            <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>edit</Link>
            <button className="btn btn-danger" onClick={() => this.props.remove(user.id)}>delete</button>
          </td>
    </tr>
          )) : <div>null</div>
          } 
  </tbody>
</table>

        </div>
        
        )
    }
}

const mapStateToProps = (state) => ({ users: state.users });
const mapDispatchToProps = {getData , remove}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
