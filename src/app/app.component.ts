import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { BirthdayComponent } from "./birthday/birthday.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
 @Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HomeComponent, RouterModule, FooterComponent, BirthdayComponent, RxjsComponent]
})
export class AppComponent {
  title = 'my-app';
  imageUrl = '../assets/home-logo.png';
 
}
