import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-star-list',
  templateUrl: './star-list.component.html',
  styleUrls: ['./star-list.component.css']
})
export class StarListComponent implements OnInit {

  Star: any = [];

  constructor( public restApi: RestApiService) { }

  ngOnInit() {
    this.loadStars();
  }
  loadStars() {
    return this.restApi.getStars().subscribe((data: any) => {
      this.Star = data.results;
    });
  }


}
