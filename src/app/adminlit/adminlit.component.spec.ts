import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlitComponent } from './adminlit.component';

describe('AdminlitComponent', () => {
  let component: AdminlitComponent;
  let fixture: ComponentFixture<AdminlitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
