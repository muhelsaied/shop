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
        dealProducts:[],
        featuredProducts:[],
        singleProduct:{},
        loading:false 
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
        const image = item.fields.image.fields.file.url;
        const product = { id ,...item.fields, image };
        return product ;
    })
    // console.log(storeProducts);

    //featured products
    let featuredProducts = storeProducts.filter(item => item.featured === true);
    this.setState({
        storeProducts,
        FilteredProducts:storeProducts,
        featuredProducts,
        cart:this.getStorageCart(),
        singleProduct:this.getStorageProduct(),
        loading:false

    });

    //deals products
    let dealProducts = storeProducts.filter(item => item.deal === true);
    this.setState({
        storeProducts,
        dealProducts:dealProducts,
        featuredProducts,
        cart:this.getStorageCart(),
        singleProduct:this.getStorageProduct(),
        loading:false

    });

    // console.log(featuredProducts);
} 
// get cart from  local storage
getStorageCart=() => {
    return {};
}


// get product from local storage
getStorageProduct = ()=> {
    return {};
}


// cart items

//add to cart
addToCart = id => {
    //set temp cart/productlist/item to deal with
    console.log(this.state.cart)
    let tempCart = [ ...this.state.cart];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find(product => product.id === id);
    if(!tempItem)
    {
        tempItem = tempProducts.find(product => product.id === id);
        let total = tempItem.price;
        let cartItem ={...tempItem, counter:1, total };
        tempCart= [...tempItem, cartItem];
        
    }
    else{
        tempItem.counter++;
        tempItem.total = tempItem.price * tempItem.counter;
        tempItem.total = parseFloat(tempItem.total.toFixed(3)); 
    }
    this.setState({
        cart:tempCart
    },
        ()=>{
        this.addTotal();
        this.syncStorage();
        this.openCart();
    });
    console.log(tempCart)
}
//set singlePage product 
setSingleProduct  = id => {
    console.log(`singlePage product  ${id}`)
}
// get total 
getTotal = ()=> {}
//add total
addTotal = () => {}
//sync storage
syncStorage = () => {}



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
            closeCart:this.closeCart,
            addToCart:this.addToCart,
            setSingleProduct:this.setSingleProduct
        }}>
        {this.props.children}
        </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;


export { ProductProvider, ProductConsumer} ;