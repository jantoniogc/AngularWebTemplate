import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  @Input() label: string;
  @Input() field: string;
  @Input() type: string;
  @Input() form: FormGroup;

  constructor() {}

  ngOnInit() {}
}
