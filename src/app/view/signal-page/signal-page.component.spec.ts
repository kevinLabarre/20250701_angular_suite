import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalPageComponent } from './signal-page.component';

describe('SignalPageComponent', () => {
  let component: SignalPageComponent;
  let fixture: ComponentFixture<SignalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
