import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  arrayMenu=[
    {nombre: 'Home'},
    {nombre: 'Estrenos'},
    {nombre: 'Series'},
    {nombre: 'DMCA'},
    {nombre: 'Descargas'},
  ];

  arrayPeliculas = [
    {
      titulo: 'Tomb Raider',
      descripcion: 'Alicia Vikander, Walton Goggins',
      esEstreno: false,
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://3.bp.blogspot.com/-k7zDFVoIjlQ/WtbqqkqyiJI/AAAAAAABIaA/jMagN1tbSRktvxQg3GCm5p9W51gIT1Y3QCLcBGAs/s640/21.jpg'
    },
    {
      titulo: 'Ready Player One',
      descripcion: 'Tye Sheridan, Olivia Cooke',
      esEstreno: false,
      urlImagen: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://4.bp.blogspot.com/-qBM29u2l2RQ/Wtbr6Kf_O_I/AAAAAAABIaM/O8Pvb-8FkPYL1cCjl9Iuv0PrCa5Y0PwNACLcBGAs/s640/21.jpg'
    },
  ];

  arrayPeliculasDos = [
    {
      titulo: 'Black Panter',
      descripcion: '',
      esEstreno: true,
      urlImagen: 'https://3.bp.blogspot.com/-cer-MDx0pjI/Wule4fPRBBI/AAAAAAABIxk/w-bvH1NYm2Usluj5XOvG9iKVf42riOIZACLcBGAs/s320/21.jpg'
    },
    {
      titulo: 'Maze Runner',
      descripcion: '',
      esEstreno: true,
      urlImagen: 'https://2.bp.blogspot.com/-9cqXBbRWCo0/Wszm1D3qG1I/AAAAAAABIOE/Ctruh8J5oIUbxQkwVgtvKqYgXLjMJS38wCLcBGAs/s320/21.jpg'
    },
    {
      titulo: 'Star Wars: Episode VIII - The Last Jedi',
      descripcion: '',
      esEstreno: true,
      urlImagen: 'https://2.bp.blogspot.com/-yqJSNm11448/WqQRmB8hAMI/AAAAAAABHiE/NisVeejgFTcdioxsELm6J_j6vTprjZ7uACLcBGAs/s320/21.jpg'
    },
    {
      titulo: 'Justice League',
      descripcion: '',
      esEstreno: true,
      urlImagen: 'https://2.bp.blogspot.com/-CUuJRcK3LNU/Wn9VDn2LGoI/AAAAAAABG1w/C6Rg8fJnPIE_1aVuLk0J3YTOmZJaMadhQCLcBGAs/s320/21.jpg'
    },
  ];

  arrayCarruselImagen=[
    {
      urlImagen: 'https://2.bp.blogspot.com/-CUuJRcK3LNU/Wn9VDn2LGoI/AAAAAAABG1w/C6Rg8fJnPIE_1aVuLk0J3YTOmZJaMadhQCLcBGAs/s320/21.jpg'
    },
    {
      urlImagen: 'https://2.bp.blogspot.com/-CUuJRcK3LNU/Wn9VDn2LGoI/AAAAAAABG1w/C6Rg8fJnPIE_1aVuLk0J3YTOmZJaMadhQCLcBGAs/s320/21.jpg'
    },
    {
      urlImagen: 'https://2.bp.blogspot.com/-CUuJRcK3LNU/Wn9VDn2LGoI/AAAAAAABG1w/C6Rg8fJnPIE_1aVuLk0J3YTOmZJaMadhQCLcBGAs/s320/21.jpg'
    },
    {
      urlImagen: 'https://2.bp.blogspot.com/-CUuJRcK3LNU/Wn9VDn2LGoI/AAAAAAABG1w/C6Rg8fJnPIE_1aVuLk0J3YTOmZJaMadhQCLcBGAs/s320/21.jpg'
    },
    {
      urlImagen: 'https://2.bp.blogspot.com/-CUuJRcK3LNU/Wn9VDn2LGoI/AAAAAAABG1w/C6Rg8fJnPIE_1aVuLk0J3YTOmZJaMadhQCLcBGAs/s320/21.jpg'
    },
    {
      urlImagen: 'https://2.bp.blogspot.com/-CUuJRcK3LNU/Wn9VDn2LGoI/AAAAAAABG1w/C6Rg8fJnPIE_1aVuLk0J3YTOmZJaMadhQCLcBGAs/s320/21.jpg'
    },
    ];

  arrayCarrusel=[
    {
      titulo: 'Ultimas Peliculas Agregadas',
      imagenes: this.arrayCarruselImagen
    },
    {
      titulo: 'Ultimas Series Agregadas',
      imagenes: this.arrayCarruselImagen
    },

    {
      titulo: 'Ultimas Capitulos Agregadas',
      imagenes: this.arrayCarruselImagen
    },
  ]

}

