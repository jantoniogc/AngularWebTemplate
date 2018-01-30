import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styleUrls: ["./progress.component.scss"]
})
export class ProgressComponent implements OnInit {
  public progreso1: FormControl;
  public progreso2: FormControl;

  constructor() {
    this.progreso1 = new FormControl(5);
    this.progreso2 = new FormControl(5);
  }

  ngOnInit() {}

}
