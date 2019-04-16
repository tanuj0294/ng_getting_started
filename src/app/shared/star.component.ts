import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "pm-star",
    templateUrl: "./star.component.html",
    styleUrls:[ "./star.component.css"]
})
export class StarComponent implements OnChanges {
    ngOnChanges(): void {  
        this.starWidth = this.rating * 75 / 5;
        console.log('change in star rating '+this.starWidth)
    }
    @Input() rating : number;
    starWidth : number; 

    @Output() notify : EventEmitter<string> = new EventEmitter<string>();

    onClick() {
        console.log("star rating component, the rating ${this.rating} was clicked");
        this.notify.emit('Clicked ${this.rating} !')
    }
}