import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpreuveSportifComponent } from './epreuve-sportif.component';

describe('EpreuveSportifComponent', () => {
  let component: EpreuveSportifComponent;
  let fixture: ComponentFixture<EpreuveSportifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpreuveSportifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpreuveSportifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
