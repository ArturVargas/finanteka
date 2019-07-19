import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundedProyectsComponent } from './funded-proyects.component';

describe('FundedProyectsComponent', () => {
  let component: FundedProyectsComponent;
  let fixture: ComponentFixture<FundedProyectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundedProyectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundedProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
