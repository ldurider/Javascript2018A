import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() userOutput: string='';
  @Output() passwordOutput: string='';



  constructor() { }

  ngOnInit() {
  }

  mostrarInformacion(event, formData){
    console.log(event);
    console.log(formData.value);
    this.userOutput=formData.value.user.toString();
    this.passwordOutput=formData.value.password.toString();

  }


}
