import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';

@NgModule({
  //декоратор, который добавляет новые возможности для класса
  declarations: [
    //есть такой компонент имей в виду
    AppComponent,
    CardComponent,
    FormComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  providers: [], //храним сервисы интерсепторы и тд
  bootstrap: [AppComponent],
})
export class AppModule {}
