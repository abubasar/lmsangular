import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentEntryComponent } from './enrollment-entry.component';

describe('EnrollmentEntryComponent', () => {
  let component: EnrollmentEntryComponent;
  let fixture: ComponentFixture<EnrollmentEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
