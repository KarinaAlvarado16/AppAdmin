import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingPage } from './sing.page';

describe('SingPage', () => {
  let component: SingPage;
  let fixture: ComponentFixture<SingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
