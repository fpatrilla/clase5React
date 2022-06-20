import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const title = 'Bienvenidos a mi E-coomerce';
class App extends Component{
  render(){
    return(
      <div>

      <h1>MuebleStore</h1>
        <NavBar/>
        <ItemListContainer title={title}/>
     
       
        

        <h4>Federico Patrilla</h4>

      </div>


    );
  }
}



export default App;
