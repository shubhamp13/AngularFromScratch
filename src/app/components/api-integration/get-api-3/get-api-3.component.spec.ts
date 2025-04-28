import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetApi3Component } from './get-api-3.component';

describe('GetApi3Component', () => {
  let component: GetApi3Component;
  let fixture: ComponentFixture<GetApi3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetApi3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetApi3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
