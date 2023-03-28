import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialModel } from './tutorial.model';

describe('TutorialModel', () => {
  let component: TutorialModel;
  let fixture: ComponentFixture<TutorialModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialModel ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
