import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponent } from './new.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

describe('NewComponent', () => {
  let component: NewComponent;
  let fixture: ComponentFixture<NewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, SharedModule],
      declarations: [NewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
