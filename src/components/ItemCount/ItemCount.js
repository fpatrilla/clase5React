import React, { useState } from 'react';
import './ItemCount.css';

export function ItemCount(props) {
  // Declaración de una variable de estado que llamaremos "count"
  
  const [stock , setStock ] = useState(0)
 
  
  
  const agregar = () =>{

    if (props.stock >= stock) {
		setStock(stock + 1)}
		 else {
		console.log('no hay mas productos');
	}
   
  }
  
	const quitar = () =>{
	if (stock >= props.initial) {
		setStock(stock - 1) } 
	else {
		console.log('quitaste todos los productos');
	}
}
		
		
	
 
	


  const onAdd = () => {

    console.log(`felicitaciones se agregaron ${stock} productos al carrito`)

  };



  return (
   <div >
     <div>
     
      <button className='item' onClick={agregar}>

	  
        Agregar
      </button>
	  <button className='item' onClick={quitar}>

	  
        Quitar
      </button>
	  <button  className='item' onClick={onAdd}>Agrear A carrtio</button>
	  
	  <div className='count'>{stock}</div>
	  
	 
    </div>
   </div>
  )};