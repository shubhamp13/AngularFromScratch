import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { OneWayDatabindingComponent } from './components/data-binding/one-way-databinding/one-way-databinding.component';
import { TwoWayDataBindingComponent } from "./components/data-binding/two-way-data-binding/two-way-data-binding.component";
import { StructuralDirectivesComponent } from "./components/directives/structural-directives/structural-directives.component";
import { AttributeDirectiveComponent } from './components/directives/attribute-directive/attribute-directive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularFromScratch';
}
