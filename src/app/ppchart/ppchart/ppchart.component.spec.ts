import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PPchartComponent } from './ppchart.component';

describe('PPchartComponent', () => {
  let component: PPchartComponent;
  let fixture: ComponentFixture<PPchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PPchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
