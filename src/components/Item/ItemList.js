import React, { useState, useEffect } from 'react';
import Item from './Item';



const ItemList = () => {
	const [character, seCharacter] = useState([{}]);

	// console.log('DATA:', character);

	
	useEffect(() => {
		
		fetch('https://rickandmortyapi.com/api/character/45')
			.then((response) => response.json())
			.then((json) => seCharacter(json));
	}, []);

	return (
		<div>
			<h1>Rick and Morty</h1>
           
			<Item character={character}/>
		</div>
	);
};

export default ItemList;
