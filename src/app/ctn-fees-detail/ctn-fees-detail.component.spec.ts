import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtnFeesDetailComponent } from './ctn-fees-detail.component';

describe('CtnFeesDetailComponent', () => {
  let component: CtnFeesDetailComponent;
  let fixture: ComponentFixture<CtnFeesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtnFeesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtnFeesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
