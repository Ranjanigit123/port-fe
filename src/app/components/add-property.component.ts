// components/add-property.component.ts
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Property } from '../models/property.model';
import { PropertyService } from '../services/property.service';

@Component({
    selector: 'app-add-property',
    template: `
    <section class = "contact" id = "contact" >
    <div>
      <h2 style="color: #007BFF;">LET'S TALK</h2>
      <form (submit)="addProperty()">
        <div class="form-row">
          <label
            >Full Name:
            <input
              type="text"
              [(ngModel)]="newProperty.fullName"
              name="title"
              required
            />
          </label>
          <label
            >Email Address:
            <input
              type="text"
              [(ngModel)]="newProperty.emailAddress"
              name="description"
              required
            />
          </label>
        </div>
        <div class="form-row">
          <label
            >Mobile Number:
            <input
              type="text"
              [(ngModel)]="newProperty.mobileNumber"
              name="image"
              required
            />
          </label>
          <label
            >Email Subject:
            <input
              type="text"
              [(ngModel)]="newProperty.emailSubject"
              name="contact"
              required
            />
          </label>
        </div>
        <div class="form-row">
          <label
            >Your Message:
            <input
              type="text"
              [(ngModel)]="newProperty.message"
              name="price"
              required
            />
          </label>
           
        </div>
        <button type="submit" style="background-color: blue;">
          Send Message
        </button>
      </form>
    </div>
    <!--Footer design-->

<footer class="footer">
    <div class="footer-text">
        <p>💙 Done by RANJANI 🤍</p>
    </div>

    <div class="footer-iconTop">
        <a href="#home"><i class="fa-solid fa-angle-up"></i></a>
    </div>     
</footer>


  `,
    styles: [],
})
export class AddPropertyComponent implements OnInit {
    newProperty: Property = {
        fullName: '',
        emailAddress: '',
        mobileNumber: '',
        emailSubject: '',
        message: '',
        
    };

    @Output() propertyAdded = new EventEmitter<Property>();

    constructor(private propertyService: PropertyService) { }

    ngOnInit(): void { }

    addProperty(): void {
        this.propertyService.addProperty(this.newProperty).subscribe(
            (res: Property) => {
                this.propertyAdded.emit(res);
                this.newProperty = {
                    fullName: '',
                    emailAddress: '',
                    mobileNumber: '',
                    emailSubject: '',
                    message: '',
                };
            },
            (error) => console.error(error)
        );
    }
}
