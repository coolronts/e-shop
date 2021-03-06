import React,{useEffect,useContext} from 'react'
import styles from './shop.module.css'

//components
import EditModal from '../../components/EditModal/EditModal'
import AddModal from '../../components/AddModal/AddModal'
import List from '../../components/List/List'

//context
import CommonContext from '../../context/common'
import UserContext from '../../context/user'

const Shop: React.FunctionComponent = () => {
  const commonContext = useContext(CommonContext)
  const userContext = useContext(UserContext)
  const products = commonContext.allProducts
  const isLoading = commonContext.isLoading
  const updateIsLoading = commonContext.updateIsLoading
  const edit = commonContext.isEdit
  const add = commonContext.isAdd
  const updateIsAdd = commonContext.updateIsAdd

  const role = userContext.role

  //class 
  const scrollOff = (add||edit) && styles.scrollOff

  useEffect(()=>{
    updateIsLoading(true)
    commonContext.getAllProducts()
    updateIsLoading(false)
  },[add])

  return (
    <>
      {(add) && (<AddModal/>)}
      {(edit) && (<EditModal/>)}
      {(!isLoading) && (
        <div className={`${styles.container} ${scrollOff}`}  >
          {(role==='ADMIN' && !add) && (<div className={styles.addButton}><button type="button" onClick={() =>updateIsAdd(true)}>Add Product</button></div>)}
          <List products={products} />
        </div>
      )}
    </>
  )
};

export default Shop;
