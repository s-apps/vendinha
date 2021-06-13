import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasDeleteComponent } from './contas-delete.component';

describe('ContasDeleteComponent', () => {
  let component: ContasDeleteComponent;
  let fixture: ComponentFixture<ContasDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContasDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
