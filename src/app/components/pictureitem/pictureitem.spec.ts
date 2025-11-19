import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pictureitem } from './pictureitem';

describe('Pictureitem', () => {
  let component: Pictureitem;
  let fixture: ComponentFixture<Pictureitem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pictureitem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pictureitem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
