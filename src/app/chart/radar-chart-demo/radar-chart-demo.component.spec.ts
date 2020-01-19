import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarChartDemoComponent } from './radar-chart-demo.component';

describe('RadarChartDemoComponent', () => {
  let component: RadarChartDemoComponent;
  let fixture: ComponentFixture<RadarChartDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadarChartDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarChartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
