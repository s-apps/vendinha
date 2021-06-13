import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasUpdateComponent } from './contas-update.component';

describe('ContasUpdateComponent', () => {
  let component: ContasUpdateComponent;
  let fixture: ComponentFixture<ContasUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContasUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
