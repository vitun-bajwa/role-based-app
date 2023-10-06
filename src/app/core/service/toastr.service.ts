import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class Toastr {

  constructor(public toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('Success', 'Success', {
      timeOut: 3000,
    });
  }
  showError() {
    this.toastr.error('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
  }
  showInfo() {
    this.toastr.info('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
  }
  showWarning() {
    this.toastr.warning('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
  }
}
