import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestDashboardComponent } from './invest-dashboard.component';

describe('InvestDashboardComponent', () => {
  let component: InvestDashboardComponent;
  let fixture: ComponentFixture<InvestDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
