import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartyExpenseDialogComponent } from './add-party-expense-dialog.component';

describe('AddPartyExpenseDialogComponent', () => {
  let component: AddPartyExpenseDialogComponent;
  let fixture: ComponentFixture<AddPartyExpenseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPartyExpenseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPartyExpenseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
