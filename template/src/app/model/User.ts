export interface IUser {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: Date;
  address: IAddress;
  role: Role;
  username: string;
  profilePhotoUrl: URL;
  gender: Gender;
}

export interface IAddress {
  city: string;
  street: string;
  postalCode: string;
}

export enum Role {
  STAFF = "Staff",
  STUDENT = "Student",
  MANAGER = "Manager",
  ADMIN = "Administrator",
}

export enum Gender {
  MALE = "Male",
  FEMALE = "Female",
} // OTHER mi rifiuto!