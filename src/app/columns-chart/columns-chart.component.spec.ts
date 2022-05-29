import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnsChartComponent } from './columns-chart.component';

describe('ColumnsChartComponent', () => {
  let component: ColumnsChartComponent;
  let fixture: ComponentFixture<ColumnsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnsChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
