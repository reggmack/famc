import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TODOComponent } from './components/todo.component';
import { TodoService } from './services/todo.service';

@NgModule({
  providers: [TodoService],
  imports: [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, TODOComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
