import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import { Product } from "./product";


@Injectable({
    providedIn : 'root'
})
export class ProductService {
    private productUrl = '/api/products/products.json';

    constructor(private http : HttpClient) {}

    getProducts() : Observable<Product[]> {
        return this.http.get<Product[]>(this.productUrl).pipe(
            tap(data => console.log("All values ="+JSON.stringify(data))),
            catchError(this.handleError)
        ) ;
    } 
    handleError(err : HttpErrorResponse) {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent) {
            errorMessage = 'An error occuered:'+ err.error.message;
        } else {
            //back end issue
            errorMessage = 'Server returned the errorCode = '+err.status+', error Message='+err.message;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
    
    
    
    
    
    
    /* Product[] {
        return [
            {
                "productid": 1,
                "productCode": "SAW001",
                "productName": "Regular Saw",
                "releaseDate": "03-04-2019",
                "description": "Basic saw for daily purposes",
                "price": 20,
                "starRating": 3.5,
                "imageUrl": "http://icons.iconarchive.com/icons/icons8/windows-8/256/Very-Basic-Idea-icon.png",
                //Tanuj : dont know why is it creating an error only removed by implementing the method
                calculateDiscount(percent: number): number {
                    return 0;
                }
            },
            {
                "productid": 2,
                "productCode": "HEX001",
                "productName": "Regular Hex Key",
                "releaseDate": "03-04-2011",
                "description": "Basic hex key for daily purposes",
                "price": 20,
                "starRating": 4.2,
                "imageUrl": "http://icons.iconarchive.com/icons/icons8/windows-8/256/Very-Basic-Idea-icon.png",
                //Tanuj : dont know why is it creating an error only removed by implementing the method
                calculateDiscount(percent: number): number {
                    return 0;
                }
            }
        ];
    } */
}