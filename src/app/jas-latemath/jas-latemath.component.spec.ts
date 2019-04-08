import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JasLatemathComponent } from './jas-latemath.component';

describe('JasLatemathComponent', () => {
  let component: JasLatemathComponent;
  let fixture: ComponentFixture<JasLatemathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JasLatemathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JasLatemathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
