import { Component, OnInit, Input } from '@angular/core';
import { FormToolsService } from '../form-tools.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-control-errors',
  templateUrl: './control-errors.component.html',
  styleUrls: ['./control-errors.component.scss']
})
export class ControlErrorsComponent implements OnInit {
  public formTools: FormToolsService;
  @Input() public form: FormGroup;
  @Input() public field: string;

  constructor() {}

  ngOnInit() {
    this.formTools = new FormToolsService(this.form);
  }
}
