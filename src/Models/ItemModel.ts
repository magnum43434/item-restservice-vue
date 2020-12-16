export default class ItemModel {
    id: number;
    name: string;
    quality: string;
    quantity: number;

    constructor(id: number,
        name: string,
        quality: string,
        quantity: number) {
        this.id = id
        this.name = name
        this.quality = quality
        this.quantity = quantity
    }
}