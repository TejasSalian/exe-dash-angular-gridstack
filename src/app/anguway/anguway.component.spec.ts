import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnguwayComponent } from './anguway.component';

describe('AnguwayComponent', () => {
  let component: AnguwayComponent;
  let fixture: ComponentFixture<AnguwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnguwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnguwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
