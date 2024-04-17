import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastModalComponent } from './cast-modal.component';

describe('CastModalComponent', () => {
  let component: CastModalComponent;
  let fixture: ComponentFixture<CastModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CastModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CastModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
