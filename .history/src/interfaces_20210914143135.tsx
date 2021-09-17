export interface IProduct{
  id: number,
  name: string,
  description: string,
  defaultImage: string,
  images: string[],
  price: number,
  discount: number,
}

export interface IItem{
  product: IProduct,
}

export type UserType = {
  id: number,
  name: {
      firstName: string,
      lastName: string,
  }
  phone: string,
  avatar: string,
  email: string,
  address: {
      country: string,
      city: string,
      zip: string,
      street: string,
  },
  orders: {
      id: number,
      products: {
          id: number,
          quantity: number,
      }[],
  },
  role: 'ADMIN' | 'CUSTOMER' // Role is based on i % 2
};

export type ProductCartType ={
  id:number,
  quantity:number
}
export type CartType = {
    id: number|null, // User id
    products: ProductCartType[]
}


export interface IUserProp{
  Cart: CartType,
  role:string|null
  addUser:(id:number)=>void,
  addProduct:(id:number, quantity: number)=>void,
  addRole:(role:string)=>void,
  addCart: (products:{id:number, quantity: number}[])=>void
}