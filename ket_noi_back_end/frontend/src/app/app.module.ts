import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {DeleteComponent} from './modal/delete/delete.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BenhAnListComponent} from "./benh-an/benh-an-list/benh-an-list.component";
import {BenhAnEditComponent} from "./benh-an/benh-an-edit/benh-an-edit.component";



@NgModule({
  declarations: [
    AppComponent,
    DeleteComponent,
    BenhAnListComponent,
    BenhAnEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
