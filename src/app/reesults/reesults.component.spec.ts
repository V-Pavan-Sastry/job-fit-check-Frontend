import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReesultsComponent } from './reesults.component';

describe('ReesultsComponent', () => {
  let component: ReesultsComponent;
  let fixture: ComponentFixture<ReesultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReesultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReesultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
