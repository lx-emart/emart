export class PurchaseHistory {
    id: number;
    productCode: String;
    productName: String;
    price: number;
    quantity: number;
    purchaseDate: String;
    imageUrl: String;
    userId: number;
    createTime: Date;
    updateTime: Date;
    
    constructor(purchaseHistory: PurchaseHistory, userId: number){
        this.productCode = purchaseHistory.productCode;
        this.productName = purchaseHistory.productName;
        this.price = purchaseHistory.price;
        this.quantity = purchaseHistory.quantity;
        this.purchaseDate = purchaseHistory.purchaseDate;
        this.imageUrl =  purchaseHistory.imageUrl;
        this.userId = userId;
    }
}
