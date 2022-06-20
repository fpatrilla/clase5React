import React from 'react';
import './ItemListContainer.css'
import { ItemCount } from '../ItemCount/ItemCount';
import ItemList from '../Item/ItemList';





const ItemListContainer = (props) => {
	

	return (
		
		<div>
			<div className='ItemListContainer'>
			<h2>{props.title}</h2>
			
		</div>
		<ItemCount initial={1}  stock={7} onAdd={""}  />
		<ItemList/>
		
		</div>
		
	);
};

export default ItemListContainer;
