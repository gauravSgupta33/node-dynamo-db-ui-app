import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-asset-data',
  templateUrl: './input-asset-data.component.html',
  styleUrls: ['./input-asset-data.component.css']
})
export class InputAssetDataComponent implements OnInit {
  registered = false;
  submitted = false;
  assetForm: FormGroup;
  serviceErrors: any = {};

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
  }

  invalidName() {
    return (this.submitted && (this.serviceErrors.name != null || this.assetForm.controls.name.errors != null));
  }

  invalidDescription() {
    return (this.submitted && (this.serviceErrors.description != null || this.assetForm.controls.description.errors != null));
  }

  invalidType() {
    return (this.submitted && (this.serviceErrors.type != null || this.assetForm.controls.type.errors != null));
  }

  invalidFuelType() {
    return (this.submitted && (this.serviceErrors.fuelType != null || this.assetForm.controls.fuelType.errors != null));
  }

  invalidManufacturer() {
    return (this.submitted && (this.serviceErrors.manufacturer != null || this.assetForm.controls.manufacturer.errors != null));
  }

  ngOnInit() {
    this.assetForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(50)]],
      type: ['', [Validators.required, Validators.maxLength(75)]],
      fuelType: ['', [Validators.required, Validators.maxLength(75)]],
      manufacturer: ['', [Validators.required, Validators.maxLength(75)]],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.assetForm.invalid === true) {
      return;
    } else {
      const data: any = Object.assign(this.assetForm.value);
      console.log(data);

      // tslint:disable-next-line:no-shadowed-variable
      this.http.post('/api/asset/addAsset', data).subscribe((data: any) => {

        const path = '/listAsset';

        this.router.navigate([path]);
      }, error => {
          this.serviceErrors = error.error.error;
        });

      this.registered = true;

    }
  }

}

