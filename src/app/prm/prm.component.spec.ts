import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrmComponent } from './prm.component';

describe('PrmComponent', () => {
  let component: PrmComponent;
  let fixture: ComponentFixture<PrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
