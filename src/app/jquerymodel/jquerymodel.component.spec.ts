import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JquerymodelComponent } from './jquerymodel.component';

describe('JquerymodelComponent', () => {
  let component: JquerymodelComponent;
  let fixture: ComponentFixture<JquerymodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JquerymodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JquerymodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
