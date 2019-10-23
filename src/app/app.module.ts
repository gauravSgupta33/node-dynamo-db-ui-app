import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayAssetDataComponent } from './display-asset-data/display-asset-data.component';
import { SearchFilter } from './pipes/searchpipe.pipe';
import { InputAssetDataComponent } from './input-asset-data/input-asset-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayAssetDataComponent,
    SearchFilter,
    InputAssetDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
