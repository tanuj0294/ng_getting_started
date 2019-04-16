import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyAppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import {ProductListComponent} from './products/product-list.component'
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';

@NgModule({
  declarations: [MyAppComponent, ProductListComponent, ConvertToSpacesPipe, StarComponent, ProductDetailComponent],
  imports: [BrowserModule, UiModule, FormsModule, HttpClientModule], 
  /*this here should only import modules
  I tried importing ProductListComponent and it was resulting in the error :
  Unexpected directive 'ProductListComponent' imported by the module 'AppModule'. Please add a @NgModule annotation. */
  bootstrap: [MyAppComponent]
})
export class AppModule { }
