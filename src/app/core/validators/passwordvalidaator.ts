import { ValidatorFn, AbstractControl } from '@angular/forms';

export function passwordvalidaator(): ValidatorFn {
  return (formgroup: AbstractControl): { [key: string]: any } | null => {
    let forbidden = false;
    if (formgroup.value) {
      if (formgroup.value !== formgroup.parent?.value.Password) {

        forbidden = true;
        return forbidden ? { Matched: true } : null!;
      }else{
      }
    }
    return null;
  };
}
