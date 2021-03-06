import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListPersonalesComponent } from './personal/list-personales/list-personales.component';
import { CreatePersonalComponent } from './personal/create-personal/create-personal.component';
import { ListHijosByPersonalComponent } from './hijo/list-hijos-by-personal/list-hijos-by-personal.component';
import { AddHijoComponent, DialogAddHijoFailed, DialogAddHijoSuccess } from './hijo/add-hijo/add-hijo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ListPersonalesComponent,
    CreatePersonalComponent,
    ListHijosByPersonalComponent,
    AddHijoComponent,
    DialogAddHijoSuccess,
    DialogAddHijoFailed
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'list-personales', component: ListPersonalesComponent },
      { path: 'create-personal', component: CreatePersonalComponent },
      { path: 'list-hijos-ny-personal', component: ListHijosByPersonalComponent },
      { path: 'add-hijo/:idPersonal', component: AddHijoComponent }
    ]),
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogAddHijoSuccess,
    DialogAddHijoFailed
  ]
})
export class AppModule { }
