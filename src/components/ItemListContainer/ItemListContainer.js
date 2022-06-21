import React from 'react';
import './ItemListContainer.css'
import { ItemCount } from '../ItemCount/ItemCount';
import ItemList from '../Item/ItemList';


const onAdd = (n) => {

    console.log(`felicitaciones se agregaron ${n} productos al carrito`)

  };





const ItemListContainer = (props) => {
	

	return (
		
		<div>
			<div className='ItemListContainer'>
			<h2>{props.title}</h2>
			
		</div>
		<ItemCount initial={1}  stock={5} onAdd={onAdd}  />
		<ItemList/>
		</div>
		
	);
};

export default ItemListContainer;
