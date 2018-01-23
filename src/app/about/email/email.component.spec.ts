import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailComponent } from './email.component';
import { SharedModule } from '../../shared/shared.module';
import { AboutModule } from '../about.module';
import { CommonModule } from '@angular/common';


describe('EmailComponent', () => {
  let component: EmailComponent;
  let fixture: ComponentFixture<EmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        SharedModule
      ],
      declarations: [ EmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

