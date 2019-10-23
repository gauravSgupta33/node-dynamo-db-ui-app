import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAssetDataComponent } from './display-asset-data.component';

describe('DisplayAssetDataComponent', () => {
  let component: DisplayAssetDataComponent;
  let fixture: ComponentFixture<DisplayAssetDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAssetDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAssetDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
