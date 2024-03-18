import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KraFormComponent } from './kra-form.component';

describe('KraFormComponent', () => {
  let component: KraFormComponent;
  let fixture: ComponentFixture<KraFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KraFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
