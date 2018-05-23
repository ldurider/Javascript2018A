import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaBotonComponent } from './pelicula-boton.component';

describe('PeliculaBotonComponent', () => {
  let component: PeliculaBotonComponent;
  let fixture: ComponentFixture<PeliculaBotonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaBotonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
