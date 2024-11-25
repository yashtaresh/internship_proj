export interface Employee {
  f_Id: string;
  f_Image: string;
  f_Name: string;
  f_Email: string;
  f_Mobile: string;
  f_Designation: string;
}

export interface LoginCredentials {
  f_userName: string;
  f_Pwd: string;
}

export interface AuthResponse {
  token: string;
  user: {
    f_userName: string;
    f_sno: number;
  };
}