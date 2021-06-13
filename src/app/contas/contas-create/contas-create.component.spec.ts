import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasCreateComponent } from './contas-create.component';

describe('ContasCreateComponent', () => {
  let component: ContasCreateComponent;
  let fixture: ComponentFixture<ContasCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContasCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
