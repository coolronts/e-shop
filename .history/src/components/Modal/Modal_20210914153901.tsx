import React, { useContext, useState , useEffect } from 'react';
import styles from './modal.module.css'
import UserContext from '../../context/user'
import CommonContext from '../../context/common'
import {Get} from '../../api/api'

const Modal: React.FunctionComponent = () => {
  
  const [fetchedCartQty, setFetchedCartQty] = useState<number>(0)
  
  const commonContext = useContext(CommonContext)
  const userContext = useContext(UserContext)


  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h4>Please Select your Role</h4>
        <hr/>
        <button onClick={()=>{
          !userContext.Cart.id && userContext.addUser(Math.floor(Math.random() * 49)*2)
        }}>
        User</button>
        <button onClick={()=>{
          !userContext.Cart.id && userContext.addUser(Math.floor(Math.random() * 49)*2 + 1)
        }}>Admin</button>
      </div>
    </div>
  )
}

export default Modal