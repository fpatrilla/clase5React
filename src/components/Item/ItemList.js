import React, { useState, useEffect } from 'react';
import Item from './Item';



const ItemList = () => {
	const [user, setUser] = useState([]);

	console.log('DATA:', user);

	
	useEffect(() => {
		
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((json) => setUser(json));
	}, []);

	return (
		<div>
			<h1>User</h1>
			{user.map((a) => (
				<Item key={a.id} data={a} />
			))}
			
		</div>
	);
};

export default ItemList;
