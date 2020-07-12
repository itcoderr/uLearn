import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningContentComponent } from './e-learning-content.component';

describe('ELearningContentComponent', () => {
  let component: ELearningContentComponent;
  let fixture: ComponentFixture<ELearningContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ELearningContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
