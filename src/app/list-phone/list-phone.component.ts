import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { IPhone } from '../datamodel/datamodel';

@Component({
  selector: 'app-list-phone',
  templateUrl: './list-phone.component.html',
  styleUrls: ['./list-phone.component.scss']
})
export class ListPhoneComponent implements OnInit {

  constructor(private backendservice: BackendService) { }
  phoneList: IPhone[] = [];

  ngOnInit(): void {
    this.getPhones();
  }

  getPhones() {
    this.backendservice.get('https://localhost:44308/Store/GetPhones').subscribe({
      next: (v) => {
        console.log(v);
        this.phoneList = v;
      },
      error: (e) => alert(e),
      complete: () => console.info('Loaded phones') 
  });
  }

  deletePhone(id: number) {
    this.backendservice.delete('https://localhost:44308/Store/DeletePhone/'+ id, true).subscribe(x => {
      this.getPhones();
    }
    );
  }

}
