import React, { Component } from 'react'
import { linkData } from './linkData'
import  { SoicalData } from '../context/soicalLink'
import { items } from './productData'

const ProductContext = React.createContext();


class ProductProvider extends Component{
    state={
        sidbarOpen:false,
        cartOpen:false,
        soicalLinks:SoicalData,
        links:linkData,
        cart:[],
        cartItems:0,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,
        storeProducts:[],
        FilteredProducts:[],
        featuredProducts:[],
        singleProduct:{},
        loading:true 
    }
//
componentDidMount(){
    //from backend 
    this.setProducts(items);
}
//setproducts

setProducts = (products) =>{
    //stored products

    let storeProducts = products.map(item => {
        const { id } = item.sys;
        const product = { id ,...item.fields};
        return product ;
    })
    console.log(storeProducts);

    //featured products
    let featuredProducts = products.filter(item => item.featured === true);
    this.setState({
        storeProducts,
        FilteredProducts:storeProducts,
        featuredProducts,
        cart:this.getStorageCart(),
        singleProduct:this.getStorageProduct(),
        loading:false

    });
} 
// get cart from  local storage
getStorageCart=() => {
    return {};
}


// get product from local storage
getStorageProduct = ()=> {
    return {};
}

// side bar toggle 
handleSide = () =>{
    this.setState({
        sidbarOpen:!this.state.sidbarOpen
    });
    }

//toggle cart
handleCart = () =>{
    this.setState({
        cartOpen:!this.state.cartOpen
    })
}
//closeCart
closeCart = () =>{
    this.setState({
        cartOpen:false
    })
}
//open cart 
openCart = () =>{
    this.setState({
        cartOpen: true
    })
}
    render(){
        return(
        <ProductContext.Provider value=
        {{
            ...this.state,
            handleSide:this.handleSide,
            handleCart:this.handleCart,
            openCart:this.openCart,
            closeCart:this.closeCart
        }}>
        {this.props.children}
        </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;


export { ProductProvider, ProductConsumer} ;