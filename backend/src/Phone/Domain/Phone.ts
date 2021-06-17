export class Phone {
	public readonly description: string;
	public readonly price: number;
	public readonly color: string;
	public readonly image: string;;
	public readonly colorLabel: string;
	public readonly brand: string;

	constructor(description: string, price: number, color: string, colorLabel: string, brand: string, image: string) {
		this.description = description;
		this.price = price;
		this.color = color;
		this.colorLabel = colorLabel;
		this.brand = brand;
		this.image = image;
	}
}