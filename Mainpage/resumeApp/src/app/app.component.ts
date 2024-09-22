import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs'; // Import MatTabsModule
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [
    RouterOutlet, 
    CommonModule, 
    FormsModule,
    MatTabsModule,
    MatInputModule,
    //BrowserAnimationsModule,
    //NoopAnimationsModule
  ],
  providers: [
    // Add your providers here
    // Example: { provide: SomeService, useClass: SomeServiceImpl }
    
  ],
  templateUrl: './app.component.html',
  //template: `<h1>Hello world!</h1>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'resumeApp';
  title = 'homesite';

  download() {
    console.log('Download button clicked!');
  }
}
