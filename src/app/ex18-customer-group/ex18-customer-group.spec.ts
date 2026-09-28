import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex18CustomerGroup } from './ex18-customer-group';

describe('Ex18CustomerGroup', () => {
  let component: Ex18CustomerGroup;
  let fixture: ComponentFixture<Ex18CustomerGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex18CustomerGroup],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex18CustomerGroup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
