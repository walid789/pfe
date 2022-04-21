import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabProduitComponent } from './tab-produit.component';

describe('TabProduitComponent', () => {
  let component: TabProduitComponent;
  let fixture: ComponentFixture<TabProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
