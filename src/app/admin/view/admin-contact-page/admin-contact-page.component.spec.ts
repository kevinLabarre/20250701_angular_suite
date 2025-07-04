import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContactPageComponent } from './admin-contact-page.component';

describe('AdminContactPageComponent', () => {
  let component: AdminContactPageComponent;
  let fixture: ComponentFixture<AdminContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminContactPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
