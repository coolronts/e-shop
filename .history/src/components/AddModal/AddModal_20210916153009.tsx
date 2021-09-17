import React,{useContext, useState, useEffect, useRef} from 'react';
import { useForm, SubmitHandler, Controller, useFormContext } from "react-hook-form";
import { MdCancel } from 'react-icons/md';
import styles from './addModal.module.css'
import CommonContext from '../../context/common';
import {IProduct} from '../../interfaces'
import {Post} from '../../api/api'

const AddModal: React.FunctionComponent = () => {

  const commonContext = useContext(CommonContext)
  
  const [file, setFile] = useState()
  const products = commonContext.allProducts
  const isLoading = commonContext.isLoading
  const updateIsLoading = commonContext.updateIsLoading
  const updateAdd = commonContext.updateIsAdd

  useEffect(() => {
    console.log(watch('defaultImage'))
  },[file])
  const { control,  setValue } = useFormContext();
  const { register, handleSubmit, watch, formState: { errors,isDirty, isSubmitting, touchedFields, submitCount  } } = useForm<IProduct>();
  const onSubmit: SubmitHandler<IProduct> = data => console.log(data);

  console.log(watch("defaultImage")) // watch input value by passing the name of it
  const imgRef = useRef(null);




  const getBase64 = (file:any, callback:any) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      callback(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };


  const uploadImage =(event:any)=>{
    const file = event.currentTarget.files[0];
    getBase64(file, (result:string) => {
      setValue('defaultImage', result);
    });
  }

  return (
    <section className={styles.container}>
        <div className={styles.modal}>
          <MdCancel className={styles.icon} onClick={()=>updateAdd(false)}/>
          <h2>Add your New Product</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="" {...register("images")} />
        
            <div className={styles.inputGroup}>
              <label>Name  </label>
              <input type="text" {...register("name")}  name="name"/>
            </div>
            <div className={styles.inputGroup}>
              <label>Description  </label>
              <textarea {...register("description")}  name="description"/>
            </div>
            <div className={styles.inputGroup}>
              <label>Price  </label>
              <input type="number" {...register("price")}  name="price"/>
            </div>
            <div className={styles.inputGroup}>
              <label>Discount  </label>
              <input type="number" {...register("discount")} name="discount"/>
            </div>
            <div className={styles.inputGroup}>
              <label>Image  </label>
              
          

              <input inputRef={imgRef}  onChange={(e)=>uploadImage(e)}  type="file"  accept=".jpeg, .png, .jpg" />
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
      </section>
    )
  };

export default AddModal;