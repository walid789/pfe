import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DountComponent } from './dount.component';

describe('DountComponent', () => {
  let component: DountComponent;
  let fixture: ComponentFixture<DountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
