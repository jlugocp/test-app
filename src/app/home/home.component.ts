import { Component } from '@angular/core';

/**
 * The home page
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  /**
   * Go to Google in a new tab
   */
  gotoGoogle() {
    window.open('https://google.com/', '_blank')
  }
}
