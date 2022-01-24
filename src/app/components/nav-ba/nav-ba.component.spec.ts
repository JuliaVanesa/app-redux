import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBaComponent } from './nav-ba.component';

describe('NavBaComponent', () => {
  let component: NavBaComponent;
  let fixture: ComponentFixture<NavBaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
