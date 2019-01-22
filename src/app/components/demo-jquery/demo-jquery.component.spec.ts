import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoJqueryComponent } from './demo-jquery.component';

describe('DemoJqueryComponent', () => {
  let component: DemoJqueryComponent;
  let fixture: ComponentFixture<DemoJqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoJqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoJqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
