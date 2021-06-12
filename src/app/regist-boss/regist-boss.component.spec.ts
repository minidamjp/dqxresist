import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistBossComponent } from './regist-boss.component';

describe('RegistBossComponent', () => {
  let component: RegistBossComponent;
  let fixture: ComponentFixture<RegistBossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistBossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistBossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
