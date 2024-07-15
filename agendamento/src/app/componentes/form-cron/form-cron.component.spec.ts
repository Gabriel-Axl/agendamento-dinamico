import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCronComponent } from './form-cron.component';

describe('FormCronComponent', () => {
  let component: FormCronComponent;
  let fixture: ComponentFixture<FormCronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCronComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
