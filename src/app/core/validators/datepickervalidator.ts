import { ValidatorFn, AbstractControl } from '@angular/forms';

export function datePickerValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let forbidden = true;
    if (control.value) {
      let agedate = new Date().getFullYear() - new Date(control.value).getFullYear();
      if (agedate >= 50) {
        return forbidden ? { MaximumAge: true } : null!;
      } else if (agedate <= 18) {
        return forbidden ? { MinimumAge: true } : null!;
      }
    }
    return  null;
  };
}
