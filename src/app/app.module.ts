import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { GridComponent } from './grid/grid.component';
import { TablaComponent } from './tabla/tabla.component';
import { CursosComponent } from './cursos/cursos.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    GridComponent,
    TablaComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, 
    LayoutModule, MatToolbarModule, 
    MatSidenavModule, MatIconModule, 
    MatListModule, MatGridListModule, 
    MatCardModule, MatMenuModule, 
    MatTableModule, MatPaginatorModule, 
    MatSortModule,
    RouterModule.forRoot([
      {path: 'cursos',component:CursosComponent},
      {path: 'grid', component:GridComponent},
      {path: 'tabla', component:TablaComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
