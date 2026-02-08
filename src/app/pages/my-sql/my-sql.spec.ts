import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySQL } from './my-sql';

describe('MySQL', () => {
  let component: MySQL;
  let fixture: ComponentFixture<MySQL>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySQL]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySQL);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
