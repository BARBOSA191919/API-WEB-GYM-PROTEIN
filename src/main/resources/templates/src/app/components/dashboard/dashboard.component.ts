import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  showLogoutOption: boolean = true;

  constructor(private authService: AuthService) {}
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;

  }
  toggleLogoutOption() {
    this.showLogoutOption = !this.showLogoutOption;
  }


  scrollToSection(sectionName: string): void {
    const section = document.getElementsByName(sectionName)[0];
    if (section) {
      section.scrollIntoView({behavior: 'smooth'});
    }
  }

  logOut() {
    this.authService.logOut();
  }


}



