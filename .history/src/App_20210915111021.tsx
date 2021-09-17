import React, { useState, useEffect } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Cart from "./pages/Cart/Cart"
import Shop from "./pages/Shop/Shop"
import Modal from "./components/Modal/Modal"
import Header from "./components/Header/Header"
import {UserContextProvider} from './context/user'
import {CommonContextProvider} from './context/common'
import {ProductCartType} from './interfaces'
import {Get, Delete} from './api/api'

const App: React.FunctionComponent = () => {
  //States
  const [id, setId] = useState<number|null>(null)
  const [role, setRole]= useState<'ADMIN'|'CUSTOMER'|null>(null)
  const [products, setProducts] = useState<ProductCartType[]>([])
  const [cartQty, setCartQty] = useState<number>(0)
  const [isLoading,setIsLoading] = useState<boolean>(false)
  const [isError,setIsError] = useState<boolean>(false)
  const updateIsLoading = (state:boolean)=>{setIsLoading(state)}
  const updateIsError = (state:boolean)=>{setIsError(state)}

  const DeleteProduct = (id:number)=>{
    Delete.deleteProduct(id)
  }

  const addUser = (_id:number) =>{
    updateIsLoading(true)
    setId(()=>_id);
    (_id%2===0) ? setRole(()=>'CUSTOMER') : setRole(()=>'ADMIN')
    updateIsLoading(false)
  }
  const addProduct = (_id:number, _quantity:number) =>{
    const foundProduct = products.find(x => x.id === _id)
    if(foundProduct){foundProduct.quantity += _quantity}
    else{setProducts(products.concat({id:_id,quantity:_quantity}))}
    setCartQty(()=>cartQty+1)
  }

  const addCart = async (_cart:ProductCartType[])=>{setProducts(()=>(_cart))}

  useEffect(() =>{
    if(id != null){
      updateIsLoading(true)
      Get.getUserCart(id)
      .then(response =>{
        if(response.products != null){
          addCart(response.products)
          let totalQty = 0 
          response.products.map((product) => totalQty += product.quantity)
          setCartQty(totalQty)
          updateIsLoading(false)}
        }
  )}},[id])


  const userContextValues ={Cart:{id,products},cartQty, role,addUser,addProduct, addCart, DeleteProduct}
  const commonContextValues = {isLoading, isError, updateIsError, updateIsLoading, allProducts,  getAllProducts}


  return (
    <CommonContextProvider value={commonContextValues}>
      <UserContextProvider value={userContextValues}>
        {(id==null || isLoading ) && <Modal/>}
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route path="/" exact component={Shop}/>
            {<Route path="/cart" exact component={Cart}/>}
          </Switch>
        </BrowserRouter>
      </UserContextProvider> 
    </CommonContextProvider>
  )
};

export default App;