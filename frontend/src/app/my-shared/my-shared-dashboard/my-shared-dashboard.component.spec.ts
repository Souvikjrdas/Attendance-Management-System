import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySharedDashboardComponent } from './my-shared-dashboard.component';

describe('MySharedDashboardComponent', () => {
  let component: MySharedDashboardComponent;
  let fixture: ComponentFixture<MySharedDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySharedDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySharedDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
