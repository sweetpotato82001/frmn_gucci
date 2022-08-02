import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCompetitionComponent } from './details-competition.component';

describe('DetailsCompetitionComponent', () => {
  let component: DetailsCompetitionComponent;
  let fixture: ComponentFixture<DetailsCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCompetitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
