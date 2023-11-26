import apple from "../images/apple.png"
import tomato from "../images/tomato.png"
import potato from "../images/potato.png"

const items = [
	{
		identificator: 1,
		name: "Apple",
		image: apple,
		inStock: 5,
		description: "Fresh, from Motherland of Russia"
	},
	{
		identificator: 2,
		name: "Tomato",
		image: tomato,
		inStock: 3,
		description: "Fresh, from Motherland of Russia"
	},
	{
		identificator: 3,
		name: "Potato",
		image: potato,
		inStock: 7,
		description: "Fresh, from Motherland of Russia"
	},
	{
		identificator: 4,
		name: "Apple",
		image: apple,
		inStock: 5,
		description: "Fresh, from Motherland of Russia"
	},
	{
		identificator: 5,
		name: "Tomato",
		image: tomato,
		inStock: 3,
		description: "Fresh, from Motherland of Russia"
	},
	{
		identificator: 6,
		name: "Potato",
		image: potato,
		inStock: 7,
		description: "Fresh, from Motherland of Russia"
	},
	{
		identificator: 7,
		name: "Apple",
		image: apple,
		inStock: 5,
		description: "Fresh, from Motherland of Russia"
	},
	{
		identificator: 8,
		name: "Tomato",
		image: tomato,
		inStock: 3,
		description: "Fresh, from Motherland of Russia"
	},
	{
		identificator: 9,
		name: "Potato",
		image: potato,
		inStock: 7,
		description: "Fresh, from Motherland of Russia"
	},
	{
		identificator: 10,
		name: "Apple",
		image: apple,
		inStock: 5,
		description: "Fresh, from Motherland of Russia"
	},
	{
		identificator: 11,
		name: "Tomato",
		image: tomato,
		inStock: 3,
		description: "Fresh, from Motherland of Russia"
	},
	{
		identificator: 12,
		name: "Potato",
		image: potato,
		inStock: 7,
		description: "Fresh, from Motherland of Russia"
	},
	{
		identificator: 13,
		name: "Apple",
		image: apple,
		inStock: 5,
		description: "Fresh, from Motherland of Russia"
	},
	{
		identificator: 14,
		name: "Tomato",
		image: tomato,
		inStock: 3,
		description: "Fresh, from Motherland of Russia"
	},
	{
		identificator: 15,
		name: "Potato",
		image: potato,
		inStock: 7,
		description: "Fresh, from Motherland of Russia"
	},
	
]

function fakeFetch(){

	return new Promise(resolve=>{
		setTimeout(()=>{resolve(items)}, 500)
	})
}

export {items, fakeFetch};