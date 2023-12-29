import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { of } from 'rxjs';


const numbers$ = of(1, 2, 3);
numbers$.subscribe({
  next(value) { console.log('Observable emitted the next value: ' + value); },
  error(err)  { console.error('Observable emitted an error: ' + err); },
  complete()  { console.log('Observable emitted the complete notification'); }
});

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [HousingLocationComponent, CommonModule],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  filteredLocationList: HousingLocation[] = [];

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

  handleOnSubmit(e: { stopPropagation: () => void; preventDefault: () => void; }){
    e.stopPropagation()
    e.preventDefault();
    console.log("button clicked")
  }

  handleOnclick(e: { stopPropagation: () => void; preventDefault: () => void; }){
    e.stopPropagation();
    e.preventDefault();
    console.log('button clicked');
  }
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }
}
