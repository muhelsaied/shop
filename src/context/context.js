import React, { Component } from 'react'
import { linkData } from './linkData'
import  { SoicalData } from '../context/soicalLink'

const ProductContext = React.createContext();


class ProductProvider extends Component{
    state={
        sidbarOpen:false,
        cartOpen:false,
        cartItems:0,
        soicalLinks:SoicalData,
        links:linkData
    }
// side bar toggle 
handleSide = () =>{
    this.setState({
        sidbarOpen:!this.state.sidbarOpen
    })
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