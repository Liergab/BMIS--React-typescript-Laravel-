export type AdminLoginTypes = {
    email:string;
    password:string;
}

export type ResidentLoginTypes = {
    email:string;
    password:string;
}

export type ResidentSigninTypes = {
    first_name:string;
    last_name:string;
    email:string;
    password:string;
    password_confirmation:string;
}

export type ResidentVerificationTable ={
    id: string;
    first_name: string;
    last_name: string;
    email    : string;
    // Add other properties as needed
  }

  export interface ResidentTable {
    id: string;
    first_name: string;
    last_name: string;
    email    : string;
    // Add other properties as needed
  }