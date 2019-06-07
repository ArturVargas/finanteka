import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestInfoComponent } from './invest-info.component';

describe('InvestInfoComponent', () => {
  let component: InvestInfoComponent;
  let fixture: ComponentFixture<InvestInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
