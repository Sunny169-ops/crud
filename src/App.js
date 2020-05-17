import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddUser from './components/addUsers';
import editUser from './components/EditUser';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {history} from './Reducers/History';



function App() {
  return (
    <Router history={history}>
    <div>
    <Navbar/>
    <Switch>
    <Route exact path="/"  component={Home}/>
    <Route exact path="/users/add"  component={AddUser}/>
    <Route exact path="/users/edit/:id"  component={editUser}/>
    </Switch>
     </div>
    </Router>
    
  );
}

export default App;
