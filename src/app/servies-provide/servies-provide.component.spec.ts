import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiesProvideComponent } from './servies-provide.component';

describe('ServiesProvideComponent', () => {
  let component: ServiesProvideComponent;
  let fixture: ComponentFixture<ServiesProvideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiesProvideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiesProvideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
