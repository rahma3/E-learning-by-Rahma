import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtlisateursComponent } from './utlisateurs.component';

describe('UtlisateursComponent', () => {
  let component: UtlisateursComponent;
  let fixture: ComponentFixture<UtlisateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtlisateursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtlisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
