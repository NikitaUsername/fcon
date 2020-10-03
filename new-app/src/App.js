import React from 'react';
import Header from "./components/header";
import StarsBlock from "./components/starsBlock"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Star from './components/star';
import Categories from "./components/categories"
import Footer from "./components/footer"

class App extends React.Component{

  render(){
    return(
      <div>
        <Header/>
        <Categories/>
        <StarsBlock/>
        <StarsBlock/>
        <Footer/>
      </div>
    )
  }
}

export default App;
