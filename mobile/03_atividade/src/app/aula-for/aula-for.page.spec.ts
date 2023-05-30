import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AulaForPage } from './aula-for.page';

describe('AulaForPage', () => {
  let component: AulaForPage;
  let fixture: ComponentFixture<AulaForPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AulaForPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
