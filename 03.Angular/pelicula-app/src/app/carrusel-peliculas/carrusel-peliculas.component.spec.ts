import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselPeliculasComponent } from './carrusel-peliculas.component';

describe('CarruselPeliculasComponent', () => {
  let component: CarruselPeliculasComponent;
  let fixture: ComponentFixture<CarruselPeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarruselPeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
