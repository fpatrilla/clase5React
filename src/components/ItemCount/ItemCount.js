import React, { useState } from 'react';
import './ItemCount.css';

export function ItemCount(props) {
  // Declaración de una variable de estado que llamaremos "count"
  
  const [count , setCount ] = useState(props.initial)
  
 
  
  
  const agregar = () =>{

    if (props.stock >= count) {
		setCount(count + 1)}
		 else {
		console.log('no hay mas productos');
	}
   
  }
  
	const quitar = () =>{
	if (1  <= count ) {
		setCount(count - 1) } 
	else {
		console.log('quitaste todos los productos');
	}
}
		
		
	
 
	





  return (
   <div >
     <div>
     
      <button className='item' onClick={agregar}>

	  
        Agregar
      </button>
	  <button className='item' onClick={quitar}>

	  
        Quitar
      </button>
	  <button  className='item' onClick={()=>props.onAdd(count)}>Agrear A carrtio</button>
	  
	  <div className='count'>{count}</div>
	  
	 
    </div>
   </div>
  )};