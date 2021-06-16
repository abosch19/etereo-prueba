export class Phone {
	public readonly title: string;
	public readonly description: string;
	public readonly price: number;
	public readonly color: string;
	public readonly brand: string;

	constructor(title: string, description: string, price: number, color: string, brand: string) {
		this.title = title;
		this.description = description;
		this.price = price;
		this.color = color;
		this.brand = brand;
	}
}