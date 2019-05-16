import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LerArquivoExcelComponent } from './componenets/ler-arquivo-excel/ler-arquivo-excel.component';

const routes: Routes = [
  {
    path: 'excel', component: LerArquivoExcelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
