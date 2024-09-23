import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTab, MatTabGroup, MatTabsModule } from '@angular/material/tabs'; // Import MatTabsModule
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
//import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root', //this is the name of this component i guess? for now we name is app-root maybe name is app-mainpage later?
  standalone: true,
  imports: 
  [
    RouterOutlet, 
    //CommonModule, 
    FormsModule,
    MatTabsModule,
    MatInputModule,
    MatTabGroup,
    MatTab,
    NgIf,
    MatIconModule,
    //BrowserAnimationsModule,
    //NoopAnimationsModule
  ],
  providers: [
    // Add your providers here
    // Example: { provide: SomeService, useClass: SomeServiceImpl }
    //provideAnimations(),
  ],
  templateUrl: './app.component.html',
  //template: `<h1>Hello world!</h1>`,
  styleUrls: ['./app.component.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  // title = 'resumeApp';
  title = 'homesite';

  download() {
    console.log('Download button clicked!');
  }
}
