import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateExampleComponent } from './template-example.component';

describe('TemplateExampleComponent', () => {
  let component: TemplateExampleComponent;
  let fixture: ComponentFixture<TemplateExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
