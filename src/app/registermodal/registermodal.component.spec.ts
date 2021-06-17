import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistermodalComponent } from './registermodal.component';

describe('RegistermodalComponent', () => {
  let component: RegistermodalComponent;
  let fixture: ComponentFixture<RegistermodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistermodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistermodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
