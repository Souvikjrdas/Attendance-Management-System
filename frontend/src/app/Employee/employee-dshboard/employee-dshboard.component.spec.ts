import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDshboardComponent } from './employee-dshboard.component';

describe('EmployeeDshboardComponent', () => {
  let component: EmployeeDshboardComponent;
  let fixture: ComponentFixture<EmployeeDshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDshboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
