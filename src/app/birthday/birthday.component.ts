import { CurrencyPipe, DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-birthday',
  standalone: true,
  imports: [DatePipe,CurrencyPipe,UpperCasePipe,LowerCasePipe],
  templateUrl: './birthday.component.html',
  styleUrl: './birthday.component.css'
})
export class BirthdayComponent {
  birthday = new Date(1988, 3, 15); 
  amount  = 20;
  a : number = 1.340;
  b : number  = 2.309;
  c : string = "amlAn dEy";
}
