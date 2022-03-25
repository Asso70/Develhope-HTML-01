export interface IEmployee {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: Date;
  address: Address;
  role: Role;
  username: string;
  profilePhotoUrl: URL;
  companies: Company[];
  gender: Gender;
  get fullName(): string;
}

export interface IAddress {
  city: string;
  street: string;
  postalCode: string;
}

export interface ICompany {
  id: number;
  name: string;
  description: string;
  location: IAddress;
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

export class Employee implements IEmployee {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: Date;
  address: IAddress;
  role: Role;
  username: string;
  profilePhotoUrl: URL;
  companies: ICompany[];
  gender: Gender;

  constructor(id: number, name: string, surname: string, age: number, dateOfBirth: Date, address: IAddress, role: Role, username: string, profilePhotoUrl: URL, companies: ICompany[],
              gender: Gender) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
    this.address = address;
    this.role = role;
    this.username = username;
    this.profilePhotoUrl = profilePhotoUrl;
    this.companies = companies;
    this.gender = gender;
  }

  get fullName(): string {
    return `${this.name} ${this.surname}`;
  }
}

export class Address implements IAddress {
  city: string;
  street: string;
  postalCode: string;

  constructor(city: string, street: string, postalCode: string) {
    this.city = city;
    this.street = street;
    this.postalCode = postalCode;
  }
}

export class Company implements ICompany {
  id: number;
  name: string;
  description: string;
  location: IAddress;

  constructor(id: number, name: string, description: string, location: IAddress) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.location = location;
  }
}