import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedsListComponent } from './breeds-list.component';

describe('ListBreedsComponent', () => {
  let component: BreedsListComponent;
  let fixture: ComponentFixture<BreedsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreedsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
