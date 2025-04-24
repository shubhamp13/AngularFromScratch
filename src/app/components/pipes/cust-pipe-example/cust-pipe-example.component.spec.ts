import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustPipeExampleComponent } from './cust-pipe-example.component';

describe('CustPipeExampleComponent', () => {
  let component: CustPipeExampleComponent;
  let fixture: ComponentFixture<CustPipeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustPipeExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustPipeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
