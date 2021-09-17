import React, { useEffect, useState } from 'react';
import {IProduct} from '../../interfaces'
import styles from './cartItem.module.css';
import {Get} from '../../api/api'

interface IProp{
  id:number,qty:number
}
const CartItem: React.FunctionComponent<IProp> = ({id,qty}) => {
  const [productInfo, setProductInfo] = useState<IProduct|null>(null)

  useEffect(()=>{
    Get.getProduct(id)
    .then(response => {
      setProductInfo(response)
    })
  },[id])
  return (
    (productInfo) && 
      (
      <>
      
            <div>
            <div  className={styles.product}>
            <div className={styles.imageContainer}>
              <img src={productInfo.defaultImage} alt="product"/>
            </div>
            <div className={styles.productInfo}>
              <h1>{productInfo.name}</h1>
              <h4>Id: <span>{id}</span></h4>
              <h4>Qty: <span>{qty}</span></h4>
              <h4>Item Price: <span>{productInfo.price} Nok</span></h4>
            </div>
            <hr/>
            <div className={styles.productSummary}>
              <h3>Total:</h3><h4>{productInfo.price*qty} Nok</h4>
            
            </div>
          </div>
        </div>
        <hr/>
        </>
        )
  )
};

export default CartItem;