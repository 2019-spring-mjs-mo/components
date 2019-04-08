import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JasAdditionComponent } from './jas-addition.component';

describe('JasAdditionComponent', () => {
  let component: JasAdditionComponent;
  let fixture: ComponentFixture<JasAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JasAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JasAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
