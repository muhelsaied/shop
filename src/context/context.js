import React, { Component } from 'react'
import { linkData } from './linkData'
import  { SoicalData } from '../context/soicalLink'
// import { items } from './productData'

import { client } from './contentful'

const ProductContext = React.createContext();


class ProductProvider extends Component{
    state = {
        sidbarOpen:false,
        cartOpen:false,
        soicalLinks:SoicalData,
        links:linkData,

        //cart items
        
        cart:[],
        cartItems:0,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,

        //set product state

        storeProducts:[],
        FilteredProducts:[],
        dealProducts:[],
        featuredProducts:[],
        singleProduct:{},
        loading:true, 
        
        //set search properity
        
        search:'',
        price:0,
        minPrice:0,
        maxPrice:0,
        company:'all',
        shipping:false
    }
//
componentDidMount(){
    //from backend contentful
   // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.


  // this.setProducts(items);
  client
  .getEntries({
    content_type: "storeTech"
  })
  .then(response => this.setProducts(response.items))
        .catch(console.error);

    // this.setProducts(items);
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


            // max price of product
    let maxPrice = Math.max(...storeProducts.map(item => item.price));
    //console.log(maxPrice)


    //featured products
    let featuredProducts = storeProducts.filter(item => item.featured === true);
    this.setState({
        storeProducts,
        FilteredProducts:storeProducts,
        featuredProducts,
        cart:this.getStorageCart(),
        singleProduct:this.getStorageProduct(),
        loading:false,
        price:maxPrice,
        maxPrice:maxPrice

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

    },
    () =>{
        //assign addTotal to set product function
        this.addTotals()
    });
} 
// get cart from  local storage
getStorageCart=() => {
    //get saved cart from local storage 
    // define temp cart 
    let tempCart ;
    //check if there is saved card in local storage 
    if(localStorage.getItem('cart')){
        tempCart = JSON.parse(localStorage.getItem(('cart')));
    }
    else{
        tempCart = [];
    }
    //return the cart
    return tempCart;
}


// get product from local storage
getStorageProduct = ()=> {
    let singleProduct = localStorage.getItem('singleProduct');
    return singleProduct? JSON.parse(singleProduct) : {}
}


// cart items

// get total 
getTotals = ()=> {
    //define subtotal/count cart item
    let subTotal = 0;
    let cartItemCount = 0; 
    //loop throw cart array
    this.state.cart.forEach(item => {
        //add cart sutotal/count
        subTotal += item.total;
        cartItemCount += item.counter;
    }) 
    subTotal = parseFloat(subTotal.toFixed(2));
    //cal tax
    let tax = subTotal * 0.1 ;
    tax = parseFloat(tax.toFixed(2));
    //cal tatal
    let total = subTotal + tax;
    total = parseFloat(total.toFixed(2));
    //return an object
    return {
        subTotal,
        tax,
        cartItemCount,
        total
    };
    // console.log(subTotal,cartItemCount,tax,total)
}
//add total
addTotals = () => {
    //assign getTotal object to avariable
    const totals = this.getTotals();
    //replace the main cart object with new one
    this.setState({
        cartItems:totals.cartItemCount,
        cartSubTotal:totals.subTotal,
        cartTax:totals.tax,
        cartTotal:totals.total,
    })
    // return to setProduct function to assign add totals to it
}
//sync storage
syncStorage = () => {
    // safe Main card to localStorage     
    localStorage.setItem('cart',JSON.stringify(this.state.cart));
}


//add to cart
addToCart = id => {
    //set temp cart/productlist/item to deal with
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find(item => item.id === id);
    if(!tempItem)
    {
        tempItem = tempProducts.find(product => product.id === id);
        let total = tempItem.price;
        let cartItem ={...tempItem, counter:1, total };
        tempCart= [...tempCart, cartItem];
        
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
        this.addTotals();
        this.syncStorage();
        this.openCart();
    });

}
//set singlePage product 
setSingleProduct  = id => {
    // console.log(`singlePage product  ${id}`)
    let product = this.state.storeProducts.find(item => item.id === id);
    // set product to local storage
    localStorage.setItem('singleProduct',JSON.stringify(product));
    //return product in state 
    this.setState({
        singleProduct:{...product},
        loading:false
    })
}


// side bar toggle 
handleSide = () =>{
    this.setState({
        sidbarOpen:!this.state.sidbarOpen
    });
    }

//////////////////////////////////////////////////
    //cart functionialty 

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
    },
    ()=>this.syncStorage()
    )
}

// incrementCart
incrementCart = id => {
    // console.log('increment '+id);
    // temp cart 
    let tempCart = [...this.state.cart];
    // find product
    const tempItem = tempCart.find(item => item.id === id); 
    // increase item count
    tempItem.counter++;
    //sum total 
    tempItem.total = tempItem.counter * tempItem.price;
    tempItem.total = parseFloat(tempItem.total.toFixed(2));
    //set state
    this.setState({
        cart:[...tempCart]
    },
    () => {
        this.addTotals();
        this.syncStorage();
      })
    }
// decrementCart
decrementCart = id => {
    // console.log('Decrement '+id);
    // temp cart 
    let tempCart = [...this.state.cart];
    // find product
    const tempItem = tempCart.find(item => item.id === id); 
    // increase item count
    tempItem.counter--;
    
    // remove item from cart if it count< 0
    if(tempItem.counter === 0 ){
        this.removeCartItem(id)
    }
    else{
        tempItem.total = tempItem.counter * tempItem.price;
        tempItem.total = parseFloat(tempItem.total.toFixed(2));
    //set state
    this.setState({
        cart:[...tempCart]
    },
    () => {
        this.addTotals();
        this.syncStorage();
      })
    }
}

// RemoveCartItem
removeCartItem = id => {
    // console.log('remove  '+id);
    //temp cart 
    let tempCart = [...this.state.cart];
    //find product match id
    tempCart = tempCart.filter(item => item.id !== id)
    // set state
    this.setState({
        cart:[...tempCart]
    },
    () => {
        this.addTotals();
        this.syncStorage();
      })
}
// clearCart
clearCart = id => {
    console.log('empty cart');
    this.setState({
        cart: [],
        cartTotal:0,
        cartItems:0,
        cartSubTotal:0,
        cartTax:0
    },
     ()=>this.syncStorage())
}


//////////////////////////////////////////////
// search function

handleSearchChange = (e) =>{
    // console.log(e);
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    // console.log(name,value);
    this.setState({
        [name]:value,
    },
    this.sortedData
    )}

sortedData =() =>{
// working variables
const { storeProducts, price, company, shipping, search} = this.state
//temp product array
let tempProducts = [...storeProducts]
// set filter logic 

let tempPrice =parseInt(price);
tempProducts = tempProducts.filter(item => item.price <= tempPrice);


if(company !== 'all'){
    tempProducts = tempProducts.filter(item => item.company === company);
}

if(search.length >0){
    tempProducts = tempProducts.filter(item => {
        let tempSearch = search.toLocaleLowerCase();
        let tempTitle =item.title.toLocaleLowerCase().slice(0,search.length);
        if(tempSearch === tempTitle ) {
            return  item
        }
    });
}
if (shipping){
    tempProducts = tempProducts.filter(item => item.freeShipping === true);
}

//set state 
this.setState({
    FilteredProducts:tempProducts
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
            setSingleProduct:this.setSingleProduct,
            incrementCart:this.incrementCart,
            decrementCart:this.decrementCart,
            removeCartItem:this.removeCartItem,
            clearCart:this.clearCart,
            handleSearchChange:this.handleSearchChange
        }}>
        {this.props.children}
        </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;


export { ProductProvider, ProductConsumer} ;
