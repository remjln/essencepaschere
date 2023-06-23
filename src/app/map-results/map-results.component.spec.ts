import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapResultsComponent } from './map-results.component';

describe('MapResultsComponent', () => {
  let component: MapResultsComponent;
  let fixture: ComponentFixture<MapResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapResultsComponent]
    });
    fixture = TestBed.createComponent(MapResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
