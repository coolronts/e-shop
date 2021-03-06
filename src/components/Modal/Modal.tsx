import React, { useContext } from 'react';
import styles from './modal.module.css'

//context
import UserContext from '../../context/user'
import CommonContext from '../../context/common'

const Modal: React.FunctionComponent = () => {
  const userContext = useContext(UserContext)
  const commonContext = useContext(CommonContext)

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        {commonContext.isLoading ?
          <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
          </div>
          
        : 
          <>
            <h4>Please Select your Role</h4>
            <hr/>
            <div className={styles.buttonContainer}>
              <button onClick={()=>{!userContext.Cart.id && userContext.addUser(Math.floor(Math.random() * 49)*2)}}>Customer</button>
              <button onClick={()=>{!userContext.Cart.id && userContext.addUser(Math.floor(Math.random() * 49)*2 + 1)}}>Admin</button>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Modal
