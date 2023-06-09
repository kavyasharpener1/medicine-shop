import React from "react";

const Mcontext = React.createContext({
    cart: [],
    store:[],
    onShowStre:(item)=>{},
    totalAmount: 0,
    onShowCart: () => { },
    onRemoveProd: (id) => { },
    token: "",
    email: '',
    isLoggedin: false,
    login: (token) => { },
    logout: () => { },
})
export default Mcontext;