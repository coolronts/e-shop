import { createContext } from "react";
import {IUserProp, ProductCartType} from '../interfaces'

//initializing the state
const UserContext = createContext<IUserProp>({
  Cart:{id:null,role:null,products:[]},
  addCart:(products:ProductCartType[])=>{},
  addUser:(id:number)=>{}, 
  addProduct:(id:number)=>{}
})

export const UserContextConsumer = UserContext.Consumer;
export const UserContextProvider = UserContext.Provider;
export default UserContext;