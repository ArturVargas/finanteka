import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldsCalculatorComponent } from './yields-calculator.component';

describe('YieldsCalculatorComponent', () => {
  let component: YieldsCalculatorComponent;
  let fixture: ComponentFixture<YieldsCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YieldsCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldsCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
