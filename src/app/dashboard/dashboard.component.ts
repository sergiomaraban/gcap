import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {  
  user: firebase.default.User | null;
  constructor(private authService: AuthService, private router: Router) { 
    this.user = null;
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

  goUser(){    
    this.authService.getUser().subscribe(user => {
      if (user) {        
        this.router.navigate(['/user']);        
      } else {        
        console.log('Usuario no autenticado');
      }
    });      
  }

  goAccountStatus(){
    this.authService.getUser().subscribe(user => {
      if (user) {        
        this.router.navigate(['/account-status']);        
      } else {        
        console.log('Usuario no autenticado');
      }
    });    
  }

  goAnnouncements(){
    this.authService.getUser().subscribe(user => {
      if (user) {        
        this.router.navigate(['/announcements']);        
      } else {        
        console.log('Usuario no autenticado');
      }
    });   
  }
}
