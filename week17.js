

class Transport {
	constructor(type, price, brand, image) {
		this.type = type;
		this.price = price;
		this.brand = brand;
		this.image = image;
	}

	getInfo() {
		return `<h1>Type:${this.type}</h1><br/><div>Brand:${this.brand}</div><br/><img src='${this.image}'/>`
	}

	getPrice() {
		return `<h1>Price:${this.price}</h1>`
	}
}

class CarTask extends Transport {
	constructor(type, price, brand, image, doors) {
		super(type, price, brand, image);
		this.doors = doors;
	}
	getDoors() {
		return `<h1>Doors:${this.doors}</h1>`;
	}

}

class Bike extends Transport {
	constructor(type, price, brand, image, maxSpeed) {
		super(type, price, brand, image);
		this.maxSpeed = maxSpeed;
	}
	getMaxSpeed() {
		return `<h1>MaxSpeed:${this.maxSpeed}</h1>`;
	}
}

const container = document.getElementById('container');
let newHtml = '';
const data = [
	{
		id: 1,
		type: 'car',
		brand: 'Audi',
		doors: 4,
		price: 4300000,
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
	},
	{
		id: 2,
		type: 'car',
		brand: 'Mercedes-Benz',
		doors: 4,
		price: 2800000,
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
	},
	{
		id: 3,
		type: 'bike',
		brand: 'Harley-Davidson',
		maxSpeed: 210,
		price: 1300000,
		image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
	},
	{
		id: 4,
		type: 'bike',
		brand: 'Harley-Davidson',
		maxSpeed: 220,
		price: 1400000,
		image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
	}
];

data.forEach((transport) => {
	if (transport.type === 'car') {
		const newCar = new CarTask(transport.type, transport.price, transport.brand, transport.image, transport.doors);
		newHtml = newHtml + newCar.getInfo() + newCar.getDoors() + newCar.getPrice();
	}
	else {
		const newBike = new Bike(transport.type, transport.price, transport.brand, transport.image, transport.maxSpeed);
		newHtml = newHtml + newBike.getInfo() + newBike.getMaxSpeed() + newBike.getPrice();
	}
})

container.innerHTML = newHtml;
