import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { SharedModule } from '../shared/shared.module';
import { EmailComponent } from './email/email.component';
import { SocialComponent } from './social/social.component';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, SharedModule],
      declarations: [AboutComponent, EmailComponent, SocialComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show contact form when user clicks the button', () => {
    const emailButton = fixture.debugElement.query(By.css('mat-chip[name="byEmail"]')).nativeElement;
    emailButton.click();
    fixture.detectChanges();
    const contactForm = fixture.debugElement.query(By.css('form'));
    expect(contactForm).toBeTruthy();
  });
});
