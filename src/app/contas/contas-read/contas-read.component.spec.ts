import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasReadComponent } from './contas-read.component';

describe('ContasReadComponent', () => {
  let component: ContasReadComponent;
  let fixture: ComponentFixture<ContasReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContasReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
