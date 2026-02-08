import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RPA } from './rpa';

describe('RPA', () => {
  let component: RPA;
  let fixture: ComponentFixture<RPA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RPA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RPA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
