import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningFooterComponent } from './e-learning-footer.component';

describe('ELearningFooterComponent', () => {
  let component: ELearningFooterComponent;
  let fixture: ComponentFixture<ELearningFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ELearningFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
