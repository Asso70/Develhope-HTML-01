interface Employee {
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
}

interface Address {
  city: string;
  street: string;
  postalCode: string;
}

interface Company {
  id: number;
  name: string;
  description: string;
  location: Address;
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

const obj: Employee = {id: 3487, name: "Mario", surname: "Rossi",  age: 30, dateOfBirth: new Date("1955/12/14"), address: {city: "Rome", street: "Via Roma 10", postalCode: "0010"},
                      role: Role.STAFF, username: "MarioRossi80", profilePhotoUrl: new URL("https://bit.ly/3yRngEP"), companies: [{id: 148979, name: "Develhope",
                      description: "La migliore", location: {city: "Palermo", street: "Via Libertà 58", postalCode: "90139"}}, {id: 123123, name: "Apple",
                      description: "E insomma...", location: {city: "Cupertino", street: "One Apple Park Way", postalCode: "95014"}}], gender: Gender.MALE};
console.log(obj);