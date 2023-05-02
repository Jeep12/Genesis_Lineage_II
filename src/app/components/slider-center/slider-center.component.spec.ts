import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCenterComponent } from './slider-center.component';

describe('SliderCenterComponent', () => {
  let component: SliderCenterComponent;
  let fixture: ComponentFixture<SliderCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
