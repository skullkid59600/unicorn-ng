import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicornModalComponent } from './unicorn-modal.component';

describe('UnicornModalComponent', () => {
  let component: UnicornModalComponent;
  let fixture: ComponentFixture<UnicornModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnicornModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicornModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
