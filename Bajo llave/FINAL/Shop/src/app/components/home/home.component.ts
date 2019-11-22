import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../data-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
