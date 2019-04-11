// insiliazed the application
import React, { Component } from 'react';
import './App.css';


//import component pages
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Products from './pages/ProductsPage';
import SingleProduct from './pages/SingleProuductPage';
import Contact from './pages/ContactPage';
import Cart from './pages/CartPage';
import Default from './pages/DefaultPage';

// default structure 
import NavBar from './components/navbar';
import SideBar from './components/sidebar';
import POPCart from './components/popcart';
import Footer from './components/footer'
//working with external npm
import { Route, Link, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';



class App extends Component {
  render() {
    return (
      <div>
          {/*      navbar         */}
          <NavBar/>

          {/*      sidebar         */}
          <SideBar/>
          {/*      popcart         */}
          <POPCart/>

        <Switch>

          <Route path='/' exact component = {Home}/>
          <Route path='/about/'  component = {About}/>
          <Route path='/products/'  component = {Products}/>
          <Route path='/product/:id/'  component = {SingleProduct}/>
          <Route path='/cart/'  component = {Cart}/>
          <Route path='/contact/'  component = {Contact}/>
          <Route exact component = {Default}/>

        </Switch>
          {/*      footer         */}
          <Footer/>

        </div>
    );
  }
}


export default App;
