import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../data-api.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public camisas = [];
  public camisa = '';
  ngOnInit() {
    this.dataApi.getAllCamisas().subscribe(camisas => {
      console.log('CAMISAS', camisas);
      this.camisas = camisas;
    })
  }

}
