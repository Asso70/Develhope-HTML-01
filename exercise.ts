interface IEmployee {
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

interface IAddress {
  city: string;
  street: string;
  postalCode: string;
}

interface ICompany {
  id: number;
  name: string;
  description: string;
  location: IAddress;
}

enum Role {
  STAFF = "Staff",
  STUDENT = "Student",
  MANAGER = "Manager",
  ADMIN = "Administrator",
}

enum Gender {
  MALE = "Male",
  FEMALE = "Female",
} // OTHER mi rifiuto!

class Employee implements IEmployee {
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

class Address implements IAddress {
  city: string;
  street: string;
  postalCode: string;

  constructor(city: string, street: string, postalCode: string) {
    this.city = city;
    this.street = street;
    this.postalCode = postalCode;
  }
}

class Company implements ICompany {
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

const obj = new Employee(3487, "Mario", "Rossi", 30, new Date("1955/12/14"), new Address("Rome", "Via Roma 10", "0010"), Role.STAFF, "MarioRossi80",
            new URL("https://bit.ly/3yRngEP"), [new Company(148979, "Develhope", "La migliore", new Address("Palermo", "Via Libertà 58", "90139")), new Company(123123, "Apple",
            "E insomma...", new Address("Cupertino", "One Apple Park Way", "95014"))], Gender.MALE);

console.log(obj, obj.fullName);