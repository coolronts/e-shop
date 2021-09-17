import React,{useContext, useState} from 'react';
import styles from './editModal.module.css';
import {IItem} from "../../interfaces"
import UserContext from '../../context/user'
import {AiFillDelete} from 'react-icons/ai'
import {FaEdit} from 'react-icons/fa'
import {MdCancel} from 'react-icons/md'


const EditModal: React.FunctionComponent = () => {  
    return( 
    <section className={styles.container}>
      <div className={styles.modal}>
        <MdCancel className={styles.icon}/>
        <h2>Edit the Name </h2>
        <input type="text"/>
        <button type="button">Save</button>
      </div>
    </section>
  )
}

export default EditModal;