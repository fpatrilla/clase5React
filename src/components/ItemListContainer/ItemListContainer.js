
import './ItemListContainer.css'
import { ItemCount } from '../ItemCount/ItemCount';
import ItemList from '../Item/ItemList';
import React, { useState, useEffect } from 'react';


const onAdd = (n) => {

    console.log(`felicitaciones se agregaron ${n} productos al carrito`)

  };







const ItemListContainer = (props) => {
	const [user, setUser] = useState([]);

	// console.log('DATA:', user);

	
	useEffect(() => {
		
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((json) => setUser(json));
	}, []);

	

	return (
		
		<div>
			<div className='ItemListContainer'>
			<h2>{props.title}</h2>
			
		</div>
		<ItemCount initial={1}  stock={5} onAdd={onAdd}  />
		<ItemList user={user}/>
		
		</div>
		
	);
};

export default ItemListContainer;
