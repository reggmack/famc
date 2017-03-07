import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TODOComponent } from './components/todos.component';
import { TodoService } from './services/todo.service';

@NgModule({
  providers: [TodoService],
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent,
    TODOComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
