import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portfolio } from 'src/class/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit{
  data: Portfolio[] = [];

  async ngOnInit() {
    await this.getPortfolio()
  }

  constructor(private http: HttpClient) {}

  public getPortfolio() {
    this.http.get("../../../assets/data/portfolio.json")
      .subscribe((data: any) => {
      let aux = data['portfolio'];
      aux.forEach((e: Portfolio) => { this.data.push(e); })
    });
  }
}

