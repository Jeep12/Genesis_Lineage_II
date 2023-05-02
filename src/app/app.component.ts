import { Component } from '@angular/core';
import { LoadScriptsService } from './services/load-scripts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Genesis';
  
  constructor(private loadScript: LoadScriptsService) {
    loadScript.load(['sidebar']);
  }
}
