import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCommandeComponent } from './tab-commande.component';

describe('TabCommandeComponent', () => {
  let component: TabCommandeComponent;
  let fixture: ComponentFixture<TabCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
