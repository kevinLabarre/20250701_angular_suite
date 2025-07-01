import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualiteDetailPageComponent } from './actualite-detail-page.component';

describe('ActualiteDetailPageComponent', () => {
  let component: ActualiteDetailPageComponent;
  let fixture: ComponentFixture<ActualiteDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualiteDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualiteDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
