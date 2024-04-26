import { v4 as uuidv4 } from 'uuid';

export default interface Sushi {
	label: string;
	ingredients: string;
	price: number;
	isLiked: boolean;
	weight: number;
	image: string;
	id: string;
	counter: number;
	summary: number;
}

export const sushiArr: Sushi[] = reactive([
	{
		label: 'Калифорния Ролл',
		ingredients: 'Crab meat, avocado, cucumber',
		price: 80,
		isLiked: false,
		weight: 200,
		image: 'salmon.png',
		id: uuidv4(),
		counter: 1,
		summary: 0,
	},
	{
		label: 'Ролл с тунцом',
		ingredients: 'Tuna, spicy mayo, cucumber',
		price: 70,
		isLiked: false,
		weight: 180,
		image: 'yasai.jpg',
		id: uuidv4(),
		counter: 1,
		summary: 0,
	},
	{
		label: 'Ролл с лососем',
		ingredients: 'Salmon, avocado, cucumber',
		price: 75,
		isLiked: false,
		weight: 160,
		image: 'lite.jpg',
		id: uuidv4(),
		counter: 1,
		summary: 0,
	},
	{
		label: 'Eel Roll',
		ingredients: 'Grilled eel, avocado, cucumber, eel sauce',
		price: 90,
		isLiked: true,
		weight: 210,
		image: 'chipu.jpg',
		id: uuidv4(),
		counter: 1,
		summary: 0,
	},
	{
		label: 'Dragon Roll',
		ingredients: 'Shrimp tempura, avocado, cucumber, eel sauce',
		price: 100,
		isLiked: true,
		weight: 220,
		image: 'katana.jpg',
		id: uuidv4(),
		counter: 1,
		summary: 0,
	},
	{
		label: 'Philadelphia Roll',
		ingredients: 'Smoked salmon, cream cheese, cucumber',
		price: 65,
		isLiked: true,
		weight: 200,
		image: 'tayol.jpg',
		id: uuidv4(),
		counter: 1,
		summary: 0,
	},
	{
		label: 'Rainbow Roll',
		ingredients: 'Crab meat, avocado, cucumber, tuna, salmon, shrimp',
		price: 60,
		isLiked: true,
		weight: 240,
		image: 'calipso.jpg',
		id: uuidv4(),
		counter: 1,
		summary: 0,
	},
	{
		label: 'Spicy Salmon Roll',
		ingredients: 'Salmon, spicy sauce, cucumber',
		price: 75,
		isLiked: true,
		weight: 190,
		image: 'mishiku.jpg',
		id: uuidv4(),
		counter: 1,
		summary: 0,
	},
	{
		label: 'Cucumber Roll',
		ingredients: 'Cucumber, sesame seeds',
		price: 60,
		isLiked: true,
		weight: 180,
		image: 'lite.jpg',
		id: uuidv4(),
		counter: 1,
		summary: 0,
	},
	{
		label: 'Shrimp Tempura Roll',
		ingredients: 'Shrimp tempura, avocado, cucumber',
		price: 90,
		isLiked: true,
		weight: 210,
		image: 'chipu.jpg',
		id: uuidv4(),
		counter: 1,
		summary: 0,
	},
]).map((item: Sushi) => {
	item.summary = item.price;
	return item;
});
