import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'thesis';
  // displaySection: string = 'results'

  ngOnInit() {
  }

  // switchTab(section: string) {
  //   this.displaySection = section;
  // }
  //

}
