

import Item from './Item';




const ItemList = (props) => {

	return (
		<div>
			<h1>User</h1>
			{props.user.map((a) => (
				<Item key={a.id} data={a} />
			))}
			
		</div>
	);
};

export default ItemList;
