import { Component, OnInit } from '@angular/core';
import { IProduct, Product } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    private _productService: ProductService;
    errorMessage : string;
    ngOnInit(): void {
        /* This is to use http observables to get the response from http client
        as part of observable (stream of data xferred in async. */
        this._productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = products;
            },   
            error => this.errorMessage = <any>error);
        //this.products = this._productService.getProducts();
        //this.filteredProducts = this._listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    constructor(productService: ProductService) { this._productService = productService; }

    onNotify(message: string): void {
        console.log('captured event from star rating being clicked !')
    }

    pageTitle: string = 'Product List';
    title: string = 'Product list';
    imagewidth: number = 50;
    imageheight: number = 50;
    showImage: boolean = false;
    filteredProducts: IProduct[];
    //We have now setter and getter for listFilter and hence it has _ infront.
    //products: any[] = [
    //products: IProduct[] = [
    products: Product[];


    private _listFilter: string = 'saw';

    public get listFilter(): string {
        return this._listFilter;
    }


    public set listFilter(value: string) {
        this._listFilter = value;
        //to perform filtering we are using setter method of property
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        console.log('filtering by ' + filterBy);
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) != -1);
    }



    toggleImage(): void {
        //alert(this.listFilter);
        this.showImage = !this.showImage;
    }
}