import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoadScriptsService } from 'src/app/services/load-scripts.service';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
  providers: [NgbCarouselConfig] // Añadimos el proveedor de configuración
})
export class CarrouselComponent implements OnInit {

	showNavigationArrows = true;
	showNavigationIndicators = true;
  images = ['../../../assets/images/imgl21.jpg','../../../assets/images/imgl22.jpg','../../../assets/images/imgl23.jpg'];
	constructor(config: NgbCarouselConfig, private loadScript:LoadScriptsService) {
    loadScript.load(['slider']);
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = false;
    config.interval = 3000;
    config.pauseOnFocus = false;
    config.pauseOnHover = false;

	}
  ngOnInit(): void {
  }
}
