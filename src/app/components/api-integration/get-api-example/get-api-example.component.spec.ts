import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetApiExampleComponent } from './get-api-example.component';

describe('GetApiExampleComponent', () => {
  let component: GetApiExampleComponent;
  let fixture: ComponentFixture<GetApiExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetApiExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetApiExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
