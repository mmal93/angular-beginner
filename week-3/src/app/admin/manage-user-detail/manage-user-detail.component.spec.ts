import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserDetailComponent } from './manage-user-detail.component';

describe('ManageUserDetailComponent', () => {
  let component: ManageUserDetailComponent;
  let fixture: ComponentFixture<ManageUserDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageUserDetailComponent]
    });
    fixture = TestBed.createComponent(ManageUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
