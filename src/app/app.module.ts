import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BlockUIModule } from 'ng-block-ui';
import { BlockUIHttpModule } from 'ng-block-ui/http';

import { MaterialFileInputModule } from 'ngx-material-file-input';

import { LerArquivoExcelComponent } from './componenets/ler-arquivo-excel/ler-arquivo-excel.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialComponentsModule } from './helpers/material-components.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LerArquivoExcelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BlockUIModule.forRoot(
      {
        message: "Carregando...",
        delayStart: 500,
        delayStop: 500
      }
    ),
    BlockUIHttpModule.forRoot(),
    MaterialFileInputModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
