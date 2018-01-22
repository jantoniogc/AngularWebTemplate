import { Component, OnInit } from '@angular/core';
import { MatChip, MatChipList  } from '@angular/material';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  byEmail = false;
  constructor() {}

  ngOnInit() {}
}
