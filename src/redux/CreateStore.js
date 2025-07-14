import { configureStore } from "@reduxjs/toolkit";
import cart from "./cartcreateSlice"

import log from "./logincreateslice";

const store=configureStore(
    {
        reducer:{
            cartinfo:cart,
            login:log
           
        }
    }
)
export default store