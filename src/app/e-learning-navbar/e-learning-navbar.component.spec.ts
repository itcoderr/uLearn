import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningNavbarComponent } from './e-learning-navbar.component';

describe('ELearningNavbarComponent', () => {
  let component: ELearningNavbarComponent;
  let fixture: ComponentFixture<ELearningNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ELearningNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
