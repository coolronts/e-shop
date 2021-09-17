import React,{useContext, useEffect} from 'react';
import styles from './cart.module.css';
import {AiFillTag} from "react-icons/ai";
import UserContext from '../../context/user'

const Cart: React.FunctionComponent = () => {
  const userContext = useContext(UserContext)
  const cart  = userContext.productsInfo
  useEffect(()=>{
    console.log(cart)

  },[cart])

  return (
        <div className={styles.cart}>
          <h2>{userContext.cartQty}</h2>
          <hr/>
          {cart.map((item,index) =>{
            return(
            <div key={index}>
            <div  className={styles.product}>
            <div className={styles.imageContainer}>
              <img src="https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/T1/9088.png" alt="product"/>
            </div>
            <div className={styles.productInfo}>
              <h2>{item.info.name}</h2>
              <h4>Id: <span>{item.info.id}</span></h4>
              <h4>Size: <span>s</span></h4>
              <h4>Color: <span>Black</span></h4>
              <h4>Qty: <span>{item.quantity}</span></h4>
              <h4>Item Price: <span>50 Nok</span></h4>
            </div>
            <hr/>
            <div className={styles.productSummary}>
              <h3>Total Price: <span>122 Nok</span></h3>
              <div className={styles.buttonContainer}>
                <button> Edit</button>
                <button> Delete</button>
              </div>
            </div>
          </div></div>)
          })}
          
        </div>
  )
};

export default Cart;