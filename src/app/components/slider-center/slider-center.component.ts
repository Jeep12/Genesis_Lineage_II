import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/services/load-scripts.service';

@Component({
  selector: 'app-slider-center',
  templateUrl: './slider-center.component.html',
  styleUrls: ['./slider-center-component.scss']
})
export class SliderCenterComponent implements OnInit {

  constructor(private loadScript: LoadScriptsService) {
    loadScript.load(['slider']);

   }

  ngOnInit(): void {
  }
}
