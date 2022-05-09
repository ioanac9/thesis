import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-result-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  displaySection: string = 'results'

  results = [
    {
      id: 1,
      full_name: 'Ioana C',
      age: 24,
      gender: 'F',
      email: 'test@ioana.com',
      is_healthy: true,
    },
    {
      id: 2,
      full_name: 'Oscar Gal',
      age: 23,
      gender: 'M',
      email: 'test@oscar.com',
      is_healthy: true
    },
    {
      id: 3,
      full_name: 'Marco D.',
      age: 54,
      gender: 'M',
      email: 'test@marco.com',
      is_healthy: false
    }
  ];

  displayResult(id: number) {
  }

  switchTab(section: string) {
    this.displaySection = section;
  }


  ngOnInit(): void {
  }
}
