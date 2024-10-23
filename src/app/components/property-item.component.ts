//components/property-item.component.ts

import { Component, Input } from '@angular/core';
import { Property } from '../models/property.model';

@Component({
    selector: 'app-property-item',
    template: `
    <div>
      <h3>{{ property.fullName }}</h3>
      <p>{{ property.emailAddress }}</p>
      <p>{{ property.mobileNumber }}</p>
      <p>{{ property.emailSubject }}</p>
      <p>{{ property.message }}</p>
      <!--<img [src]="property.image" alt="{{ property.title }}" />
      <p>Contact: {{ property.contact }}</p>-->
    </div>
  `,
})
export class PropertyItemComponent {
    @Input() property!: Property;

    constructor() { }
}
