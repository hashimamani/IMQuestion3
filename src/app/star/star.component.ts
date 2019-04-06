import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  id = this.actRoute.snapshot.params.id;

  Star: any = [];

  ngOnInit() {
    this.loadStars(this.id);
  }
  loadStars(id) {
    return this.restApi.getStar(id).subscribe((data: any) => {
      this.Star = data;
    });
  }

}
