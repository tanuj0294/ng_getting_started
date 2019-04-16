export interface IProduct {
    productid : number;
    productCode : string;
    productName : string;
    releaseDate : string;
    description : string;
    price : number;
    starRating : number;
    imageUrl : string;

    calculateDiscount(percent : number) : number;

}

export class Product implements IProduct {
    calculateDiscount(percent: number): number {
        console.log("hello");
        return this.price - (this.price * percent / 100);
    }
    
   constructor(public productid : number, public productCode : string,
    public productName : string, public releaseDate : string, 
    public description : string, public price : number,
    public starRating : number, public imageUrl : string ) {

    }

    

}