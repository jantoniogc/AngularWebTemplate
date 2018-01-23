import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialComponent } from './social.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

describe('SocialComponent', () => {
  let component: SocialComponent;
  let fixture: ComponentFixture<SocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, SharedModule],
      declarations: [SocialComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
