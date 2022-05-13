export interface IType {
  id: string;
  imageURL: URL;
}

export const types: IType[] = [
  {id: "education", imageURL: new URL("http://localhost:4200/assets/Busywork.svg")},
  {id: "recreational", imageURL: new URL("http://localhost:4200/assets/Recreational.svg")},
  {id: "busywork", imageURL: new URL("http://localhost:4200/assets/Busywork.svg")}
];