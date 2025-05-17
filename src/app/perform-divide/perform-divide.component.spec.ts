import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformDivideComponent } from './perform-divide.component';

describe('PerformDivideComponent', () => {
  let component: PerformDivideComponent;
  let fixture: ComponentFixture<PerformDivideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformDivideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformDivideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
