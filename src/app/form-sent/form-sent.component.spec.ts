import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSentComponent } from './form-sent.component';

describe('FormSentComponent', () => {
  let component: FormSentComponent;
  let fixture: ComponentFixture<FormSentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
