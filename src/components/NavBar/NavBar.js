import React, { Component } from "react";
import { CartWidget } from "../CartWidget.js/CartWidget";
import './Navbar.css'


class NavBar extends Component {
    render(){
        return(
           
         
          <div className="container">
            <div className="row">
                    <div className="col-md-11">

                        <nav>
              
                              <a href="#/">Inicio</a>
                                <a href="#/">Muebles</a>
                                <a href="#/">Sillas</a>
                                <a href="#/">La Emresa</a>
                                <a href="#/">Carrito</a>
                
              
                        <div className="animation start-home"></div>
                       
                        </nav>
      
              
                     </div>
                     <div className="col-md-1">

                         <CartWidget/>
                    </div>
            </div>
          </div>
          
   
        
               
         
        );
                
            
    }
}

export default NavBar