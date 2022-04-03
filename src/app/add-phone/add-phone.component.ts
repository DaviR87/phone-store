import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';
import { IPhone } from '../datamodel/datamodel';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.scss']
})
export class AddPhoneComponent implements OnInit {

  addPhoneForm: FormGroup;

  constructor(
    private backendservice: BackendService
  ) {
    this.addPhoneForm = new FormGroup({
        'id': new FormControl('', [Validators.required, Validators.min(1)]),
        'model': new FormControl('', [Validators.required])
      })
  }

  ngOnInit(): void {
  }

  submitData() {
    console.log(this.addPhoneForm.value);
    const request: IPhone = {
      id: this.addPhoneForm.value.id,
      model: this.addPhoneForm.value.model
    }
    this.backendservice.post('https://localhost:44308/Store/AddPhone/', request, true).subscribe(resp => {
      alert('Phone added')
    }
    );
  }

}
