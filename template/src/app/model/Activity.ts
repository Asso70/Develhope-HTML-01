export interface IType {
  id: string;
  descr: string;
  imageHref: string;
}

export const types: IType[] = [
  {id: "education", descr: "Education", imageHref: "assets/Busywork.svg"},
  {id: "recreational", descr: "Recreational", imageHref: "assets/Recreational.svg"},
  {id: "social", descr: "Social", imageHref: "assets/Social.svg"},
  {id: "diy", descr: "Do-it-yourself", imageHref: "assets/DIY.svg"},
  {id: "charity", descr: "Charity", imageHref: "assets/Charity.svg"},
  {id: "cooking", descr: "Cooking", imageHref: "assets/Cooking.svg"},
  {id: "relaxation", descr: "Relaxation", imageHref: "assets/Relaxation.svg"},
  {id: "music", descr: "Music", imageHref: "assets/Music.svg"},
  {id: "busywork", descr: "Busywork", imageHref: "assets/Busywork.svg"},
];

export interface IActivity {
  activity: string;
  accessibility: number;
  type: string;
  participants: number;
  price: number;
  link?: string;
  key: number;
}