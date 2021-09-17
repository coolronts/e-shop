import React, { useState, useEffect } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header"
import Cart from "./pages/Cart/Cart"
import Shop from "./pages/Shop/Shop"
import Modal from "./components/Modal/Modal"
import {UserContextProvider} from './context/user'


const App: React.FunctionComponent = () => {
  const [user, setUser] = useState<number|null>(null)
  const updateUser = (_id:number) =>{
    setUser(_id)
  }

  const userContextValues ={user,updateUser}
  return (
    <UserContextProvider value={userContextValues}>
      {!user && <Modal/> }
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" exact component={Shop}/>
          <Route path="/cart" exact component={Cart}/>
        </Switch>
      </BrowserRouter>
    </UserContextProvider> 
  )
};

export default App;