import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KslSubtractComponent } from './ksl-subtract.component';

describe('KslSubtractComponent', () => {
  let component: KslSubtractComponent;
  let fixture: ComponentFixture<KslSubtractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KslSubtractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KslSubtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
