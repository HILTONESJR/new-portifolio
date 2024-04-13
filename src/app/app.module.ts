import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './app/components/components.component';
import { MenuComponent } from './app/components/menu/menu.component';
import { ApresentacaoComponent } from './app/components/apresentacao/apresentacao.component';
import { SkillsComponent } from './app/components/skills/skills.component';
import { HobbiesComponent } from './app/components/hobbies/hobbies.component';
import { FormacaoComponent } from './app/components/formacao/formacao.component';
import { ExperienciaProjetosComponent } from './app/components/experiencia-projetos/experiencia-projetos.component';
import { ContatoComponent } from './app/components/contato/contato.component';
import { HomeComponent } from './app/pages/home/home.component';
import { FooterComponent } from './app/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    MenuComponent,
    ApresentacaoComponent,
    SkillsComponent,
    HobbiesComponent,
    FormacaoComponent,
    ExperienciaProjetosComponent,
    ContatoComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
