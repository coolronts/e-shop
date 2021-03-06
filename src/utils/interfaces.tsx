//Product Interface
export interface IProduct{
  id: number,
  name: string,
  description: string,
  defaultImage: string,
  images: string[],
  price: number,
  discount: number,
}

//Item props for Card component
export interface IItemProps{
  product: IProduct,
}


export type ProductCartType ={
  id:number,
  quantity:number
}

export interface ICartItemProp{
  id:number,qty:number, updateTotal:(arg:number) =>void
}
export type UserCartType = {
    id: number|null, // User id
    products: ProductCartType[]
}

export interface IUserProp{
  Cart: UserCartType,
  role: 'ADMIN' | 'CUSTOMER' | null,
  cartQty: number,
  addUser:(id:number)=>void,
  addProduct:(id:number, quantity: number)=>void,
  addCart: (products:{id:number, quantity: number}[])=>void
  DeleteProduct:(id:number)=>void
}

export interface ICommon{
  isLoading:boolean,
  updateIsLoading:(state:boolean)=>void,

  isError:boolean,
  updateIsError:(state:boolean)=>void,

  isEdit:string,
  updateIsEdit:(type:string)=>void,

  isAdd:boolean,
  updateIsAdd:(state:boolean)=>void

  isSearch:boolean,
  updateIsSearch:(state:boolean)=>void,

  allProducts:IProduct[],
  getAllProducts:()=>void,
  
  selectedProduct: IProduct,
  updateSelectedProduct:(product:IProduct)=>void,
  
}