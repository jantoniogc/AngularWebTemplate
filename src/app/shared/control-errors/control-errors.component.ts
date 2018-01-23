import { Component, OnInit, Input } from '@angular/core';
import { FormToolsService } from '../form-tools.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-control-errors',
  templateUrl: './control-errors.component.html',
  styleUrls: ['./control-errors.component.scss'],
  providers: [FormToolsService]
})
export class ControlErrorsComponent implements OnInit {

  @Input() public form: FormGroup;
  @Input() public field: string;

  constructor(
    public formTools: FormToolsService
  ) {}

  ngOnInit() {
    this.formTools.formGroupValue(this.form);
  }
}
