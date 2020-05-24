import {Product} from "./Product";

export class Cart {
    id: number;
    productCode: String;
    productName: String;
    price: number;
    stock: number;
    quantity: number;
    discount: number;
    imageUrl: String;
    userId: number;
    createTime: Date;
    updateTime: Date;
    
    constructor(product: Product, quantity = 1, userId: number){
        this.productCode = product.code;
        this.productName = product.name;
        this.price = product.price;
        this.stock = product.stock;
        this.quantity = quantity;
        this.discount = product.discount;;
        this.imageUrl = product.imageUrl;
        this.userId = userId;
    }
}
