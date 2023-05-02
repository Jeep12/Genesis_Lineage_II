import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/services/load-scripts.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loadScript: LoadScriptsService) {
  }

  ngOnInit(): void {
  }

}
