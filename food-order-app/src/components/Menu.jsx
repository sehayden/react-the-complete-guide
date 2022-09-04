import React from "react";
import MenuItem from "./MenuItem";
const LIST_DUMMY = [
	{
		name: 'sushi',
		description: 'finest japanese cuisine',
		price: 22.99
	},
	{
		name: 'milk',
		description: 'simply refreshing milk',
		price: 5.99
	},
	{
		name: 'rice',
		description: 'carb thing i don\'t really eat',
		price: 22.99
	},
	{
		name: 'water',
		description: 'the ultimate resource of life',
		price: 22.99
	}
]

const Menu = () => {
	return (
		LIST_DUMMY.map((dummy) => {
			<MenuItem name={dummy.name} description={dummy.description} price={dummy.price}></MenuItem>
		})
	);
}

export default Menu;