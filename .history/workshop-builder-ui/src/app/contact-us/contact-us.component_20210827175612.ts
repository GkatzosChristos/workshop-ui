import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-us', 
  templateUrl: 'contact-us.html',
  styleUrls: ['./contact-us.scss']
})
export class ContactUsComponent implements OnInit {
  contatUsForm = new FormGroup({

    });
  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    
  }

  onReset(){
    location.reload();
  }

}


