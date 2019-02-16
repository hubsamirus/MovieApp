import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  information = null;

  constructor(private activatdRoute: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit() {
    const id = this.activatdRoute.snapshot.paramMap.get('id');
      this.movieService.getDetails(id).subscribe(result => {
      console.log('details:' , result);
      this.information = result;
   });
  }

  openWebsite() {
    window.open(this.information, '_blank');
  }
}
