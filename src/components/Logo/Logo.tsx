import React, {useContext, useState} from 'react'
import styles from './logo.module.css'
import {Link} from "react-router-dom"

//icons
import {MdCancel} from "react-icons/md"
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';

//interface
import {IProduct} from '../../utils/interfaces'

//context
import UserContext from '../../context/user'
import CommonContext from '../../context/common'

//api
import {Get} from "../../api/api"

const Logo: React.FunctionComponent<{logo:string}>= ({logo}) => {
  const userContext = useContext(UserContext)
  const commonContext = useContext(CommonContext)

  const [searchItems, setSearchItems] = useState<IProduct[]>([])

  const isSearch = commonContext.isSearch
  const updateSearch = commonContext.updateIsSearch



  const search = (keyword:any) =>{
    if(keyword.length===0){
      updateSearch(false)
    }
    else{
      updateSearch(true)
      Get.searchProduct(keyword)
      .then(result => {setSearchItems(()=>result.slice(0,5))})
    }
  }
  return (
    <>
      {logo==="cart" && (
        <Link to="/cart">
          <div className={styles.logoContainer}>
            <AiOutlineShoppingCart className={styles.icon}/>       
            {userContext.Cart.products != null && (<p className={styles.badge}>{userContext.cartQty}</p>)}
          </div>
        </Link>
      )}

      {logo==="user" && (
        <div className={styles.logoContainer}>
         <AiOutlineUser className={styles.icon}/>       
        </div>
      )}

      {logo==="search" && (
        <div onClick={()=>{updateSearch(true)}} className={styles.logoContainer}>
          <AiOutlineSearch  className={styles.icon}/>       
        </div>
      )}
    </>
  )
}

export default Logo
