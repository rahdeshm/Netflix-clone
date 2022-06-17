import React, { useEffect, useRef } from 'react';
import './App.css';
import Homescreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Banner from './Banner';
import LoginScreen from './LoginScreen';
import { auth } from './firebase';
import {useDispatch,useSelector} from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';



function App() {
  
  const user= useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();


  useEffect(()=>{
  const unsubscribe=auth.onAuthStateChanged(userAuth=>{
    if(userAuth){
     dispatch(login({
       uid:userAuth.uid,
       email:userAuth.email
     }))
    }
    else{
        dispatch(logout())
    }
    return unsubscribe;
  })
  },[]);
  return (
    <div className="app">
      <Router>
      {!user ? (
        <LoginScreen/>
      ) :(
        <Switch>
          <Route path="/" exact>
             
             <Homescreen/> 
          </Route>
        </Switch>
      )}
        
      </Router>
    </div>
  );
}

export default App;
