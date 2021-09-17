import React,{useContext, useEffect, useState} from 'react'
import styles from './editModal.module.css'
import CommonContext from '../../context/common'
import {MdCancel} from 'react-icons/md'
import {Put} from '../../api/api'


const EditModal: React.FunctionComponent = () => {  
    const commonContext = useContext(CommonContext)
    const updateEdit = commonContext.updateIsEdit
    const edit = commonContext.isEdit
    const updateIsEdit = commonContext.updateIsEdit
    const updateIsLoading = commonContext.updateIsLoading
    const selectedProduct = commonContext.selectedProduct
    const updateProducts = commonContext.getAllProducts
    const [newValue, setNewValue] = useState<number|string>('')

    const save = ()=>{
        updateIsLoading(true)
        if(edit==='name' && typeof(newValue)==='string'){
          selectedProduct.name = newValue
          Put.updateProduct(selectedProduct, selectedProduct.id)
        }else if(edit==='description' && typeof(newValue)==='string'){
          selectedProduct.description = newValue
          Put.updateProduct(selectedProduct, selectedProduct.id)
        }else if(edit==='price' && typeof(newValue)==='number'){
          console.log(price)
          selectedProduct.price = newValue
          Put.updateProduct(selectedProduct, selectedProduct.id)
        }else if(edit==='discount' && typeof(newValue)==='number'){
          selectedProduct.discount = newValue
          Put.updateProduct(selectedProduct, selectedProduct.id)
        }
        updateProducts()
        updateIsEdit('')
        updateIsLoading(false)
        setNewValue('')
      
    }

    useEffect(()=>{
      if(edit==='name'){setNewValue(selectedProduct.name)}
      else if(edit==='description'){setNewValue(selectedProduct.description)}
      else if(edit==='price'){setNewValue(selectedProduct.price)}
      else if(edit==='discount'){setNewValue(selectedProduct.discount)}
    },[edit])

    return( 
    <section className={styles.container}>
      <div className={styles.modal}>
        <MdCancel className={styles.icon} onClick={()=>updateEdit('')}/>
        <h2>Edit the {edit} </h2>
        <input type="text" onChange={(e)=>setNewValue(e.target.value)}  value={newValue}  />
        <button type="button" onClick={()=>save()} >Save</button>
      </div>
    </section>
  )
}

export default EditModal;