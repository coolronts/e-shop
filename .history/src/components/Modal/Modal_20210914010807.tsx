import React from 'react';
import styles from './modal.module.css'

const Header: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h4>Please Select your Role</h4>
        <button>User</button>
      </div>
    </div>
  )
}

export default Header