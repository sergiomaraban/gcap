import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {
  user: firebase.default.User | null; // Propiedad para almacenar la información del usuario

  constructor(private authService: AuthService, private router: Router) {
    this.user = null; // Inicializar la propiedad del usuario como nulo
  }

  ngOnInit() {
    // Obtener el usuario actual al cargar el componente
    this.authService.getUser().subscribe(user => {
      this.user = user; // Almacenar la información del usuario en la propiedad del componente
      // Realizar acciones en consecuencia, por ejemplo:
      if (this.user) {
        // El usuario está autenticado, hacer algo
      } else {
        // El usuario no está autenticado, hacer algo más
        this.router.navigate(['/login']);
      }
    });
  }

  onClick() {    
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  goDashboard(){    
    this.authService.getUser().subscribe(user => {
      if (user) {        
        this.router.navigate(['/dashboard']);        
      } else {        
        console.log('Usuario no autenticado');
      }
    });      
  }

}
