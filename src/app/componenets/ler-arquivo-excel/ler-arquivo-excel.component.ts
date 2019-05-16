import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-ler-arquivo-excel',
  templateUrl: './ler-arquivo-excel.component.html',
  styleUrls: ['./ler-arquivo-excel.component.scss']
})
export class LerArquivoExcelComponent implements OnInit {

  form: FormGroup;

  constructor(private service: FileService) { }

  ngOnInit() {
    this.form = new FormGroup({
      anexos: new FormControl()
    });
  }

  onSubmit() {
    let file = new FormData();
    file.append("file", this.form.controls.anexos.value.files[0])
    this.service.sendFile(file).subscribe(res => {
      // mostra no log o ultimo registro passado pelo excel
      console.log(res)
    });
  }

}
