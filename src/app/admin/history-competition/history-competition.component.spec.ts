import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCompetitionComponent } from './history-competition.component';

describe('HistoryCompetitionComponent', () => {
  let component: HistoryCompetitionComponent;
  let fixture: ComponentFixture<HistoryCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryCompetitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
