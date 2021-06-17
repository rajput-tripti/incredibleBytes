import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoListComponent } from './ngo-list.component';

describe('NgoListComponent', () => {
  let component: NgoListComponent;
  let fixture: ComponentFixture<NgoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
