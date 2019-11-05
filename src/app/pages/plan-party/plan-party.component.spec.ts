import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPartyComponent } from './plan-party.component';

describe('PlanPartyComponent', () => {
  let component: PlanPartyComponent;
  let fixture: ComponentFixture<PlanPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
