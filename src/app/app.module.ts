import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StudentListComponent } from './student-list/student-list.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'student-list', component: StudentListComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    FormComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
    }),
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
