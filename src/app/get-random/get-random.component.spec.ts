import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRandomComponent } from './get-random.component';

describe('GetRandomComponent', () => {
  let component: GetRandomComponent;
  let fixture: ComponentFixture<GetRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetRandomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
