import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Questao2Page } from './questao2.page';

describe('Questao2Page', () => {
  let component: Questao2Page;
  let fixture: ComponentFixture<Questao2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Questao2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
