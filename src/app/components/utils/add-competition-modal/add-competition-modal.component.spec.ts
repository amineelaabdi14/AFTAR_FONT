import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompetitionModalComponent } from './add-competition-modal.component';

describe('AddCompetitionModalComponent', () => {
  let component: AddCompetitionModalComponent;
  let fixture: ComponentFixture<AddCompetitionModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCompetitionModalComponent]
    });
    fixture = TestBed.createComponent(AddCompetitionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
