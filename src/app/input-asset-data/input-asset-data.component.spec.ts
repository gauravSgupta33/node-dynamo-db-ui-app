import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAssetDataComponent } from './input-asset-data.component';

describe('InputAssetDataComponent', () => {
  let component: InputAssetDataComponent;
  let fixture: ComponentFixture<InputAssetDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAssetDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAssetDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
