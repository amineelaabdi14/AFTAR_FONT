import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitonsComponent } from './competitons.component';

describe('CompetitonsComponent', () => {
  let component: CompetitonsComponent;
  let fixture: ComponentFixture<CompetitonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetitonsComponent]
    });
    fixture = TestBed.createComponent(CompetitonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
