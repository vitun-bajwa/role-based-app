export interface Users {
    id: number;
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
    TemporaryAddress: string;
    PermanentAddress: string;
    City: string;
    Gender: string;
    ConfirmPassword: string;
    Postalcode: number;
    Date?: Date;
    role: any;
  }