import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrantionComponent } from './user-registrantion.component';

describe('UserRegistrantionComponent', () => {
  let component: UserRegistrantionComponent;
  let fixture: ComponentFixture<UserRegistrantionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistrantionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrantionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
