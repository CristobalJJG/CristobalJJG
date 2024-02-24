import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portfolio } from 'src/class/portfolio';

@Component({
  selector: 'app-portfolio',
  template: `
    <h2 class="flex">
      <app-card *ngFor="let p of data" [portfolio]="p"></app-card>
    </h2>
  `,
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  data: Portfolio[] = [];

  ngOnInit() {
    this.getPortfolio()
  }

  constructor(private http: HttpClient) { }

  public getPortfolio() {
    this.http.get("../../../assets/data/portfolio.json")
      .subscribe((data: any) => {
        let aux = data['portfolio'];
        aux.forEach((e: Portfolio) => { this.data.push(e); })
      });
  }
}

