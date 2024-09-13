import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicPilotComponent } from './logic-pilot.component';

describe('LogicPilotComponent', () => {
  let component: LogicPilotComponent;
  let fixture: ComponentFixture<LogicPilotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogicPilotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogicPilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
