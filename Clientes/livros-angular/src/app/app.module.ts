import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {ControleEditoraService} from "./controle-editora.service";
import {ControleLivrosService} from "./controle-livros.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'lista', component: LivroListaComponent },
  { path: 'dados', component: LivroDadosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    LivroListaComponent,
    LivroDadosComponent,
    HomeComponent,
    FooterComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatToolbarModule],
  providers: [ControleEditoraService, ControleLivrosService],
  bootstrap: [AppComponent],
})
//     imports: [
//         BrowserModule,
//         AppRoutingModule,
//         FormsModule
//     ],
//   providers: [ControleEditoraService,ControleLivrosService],
//   bootstrap: [AppComponent]
// })
export class AppModule { }
